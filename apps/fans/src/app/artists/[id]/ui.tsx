"use client";

import Image from "next/image";
import { ArtistAvatar } from "@components/ArtistAvatar/ArtistAvatar";
import { Artist, ArtistCommunity } from "@rola/services/schemas";
import { formatGenres, Genre } from "@rola/services/utils";
import { Button, Container, Text, Title } from "@rola/ui/components";
import { SubscriptionTier } from "@components/SubscriptionTier/SubscriptionTier";
import { useArtistPageData } from "./data";
import { subscriptionTiers } from "@rola/services/constants";
import Link from "next/link";
import { AudioPlayer } from "@components/AudioPlayer/AudioPlayer";

type ArtistPageProps = {
  id: string;
  name: string;
  coverURL?: string;
  profileURL?: string;
  genres: Genre[];
  bio?: string;
  songs?: string[];
};

function ArtistPageUI({
  id,
  name,
  coverURL,
  profileURL,
  genres,
  bio,
  songs,
}: ArtistPageProps) {
  const { selectedSubscription, handleSubscriptionChange } =
    useArtistPageData();

  return (
    <Container className="mb-24">
      <Container className="relative -mt-20 min-h-[25vh] lg:min-h-[50vh]">
        <Image
          src={coverURL ?? "/static/img/artists-landing-header.jpg"}
          alt={name}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </Container>

      <Container
        size="xl"
        className="mb-24 flex flex-col px-4 lg:flex-row lg:gap-12"
      >
        <ArtistAvatar
          image={profileURL}
          name={name}
          size="lg"
          className="-mt-4"
        />
        <Container className="flex flex-col">
          <Container className="pb-4 pt-8">
            <Title order={2} align="left" className="font-bold">
              {name}
            </Title>
            <Text className="text-brand">{formatGenres(genres)}</Text>
          </Container>
          <Text className="pb-8 text-justify">
            Te damos la bienvenida al perfil de artista en ROLA, donde podrás
            explorar su trabajo y profunda pasión por la música. También
            encontrarás las opciones de cómo brindar tu apoyo y contribuir a
            impulsar su carrera musical.
          </Text>
          <Container>
            <Container className="mb-4 flex flex-col justify-between gap-4 pb-2 lg:flex-row">
              <SubscriptionTier
                type={subscriptionTiers.basic.type}
                selected={selectedSubscription === subscriptionTiers.basic.type}
                onClick={() =>
                  handleSubscriptionChange(subscriptionTiers.basic.type)
                }
              />
              <SubscriptionTier
                type={subscriptionTiers.premium.type}
                selected={
                  selectedSubscription === subscriptionTiers.premium.type
                }
                onClick={() =>
                  handleSubscriptionChange(subscriptionTiers.premium.type)
                }
              />
              <SubscriptionTier
                type={subscriptionTiers.gold.type}
                selected={selectedSubscription === subscriptionTiers.gold.type}
                onClick={() =>
                  handleSubscriptionChange(subscriptionTiers.gold.type)
                }
              />
            </Container>
            <Container className="text-center lg:text-left">
              <Link
                href={`/artists/${id}/subscription?tier=${selectedSubscription}`}
              >
                <Button>Suscribirme</Button>
              </Link>
            </Container>
          </Container>
        </Container>
      </Container>

      <Container size="xl" className="mb-24">
        <Title order={2} underline className="mb-8 text-center uppercase">
          Acerca de {name}
        </Title>
        <Text className="mb-8">{bio}</Text>

        {songs?.length && (
          <Container className="grid gap-4 lg:grid-cols-2">
            {songs.map((song) => (
              <AudioPlayer key={song} songId={song} />
            ))}
          </Container>
        )}
      </Container>

      <Container size="xl">
        <Title order={2} underline className="mb-8 px-4 text-center uppercase">
          ¿Cómo apadrinar a tu artista favorito?
        </Title>

        <Text className="mb-12 text-justify">
          Hoy es un buen día para apoyar a tu artista favorito. Con frecuencia,
          pasamos por alto las dificultades y obstáculos que enfrentan los
          músicos en su búsqueda de llevar a cabo su pasión. Los costos
          asociados con la renta de espacios de ensayo, el mantenimiento de sus
          instrumentos, el alquiler de salas de grabación y el tiempo dedicado a
          abrirse camino en la industria musical son solo algunas de las cargas
          que llevan sobre sus hombros. Es por ello que hoy, queremos dar un
          paso adelante y decir: estamos aquí para impulsar tu música. Creemos
          en tu talento y estamos listos para brindarte nuestro apoyo. Te
          ofrecemos tres opciones, adaptadas a tu disponibilidad y deseo de
          respaldar a los artistas. Cualquiera que elijas, no solo te
          proporcionará la satisfacción de respaldar a tus artistas favoritos,
          sino que también te dará acceso a su contenido exclusivo en nuestra
          plataforma.
        </Text>

        <Container>
          <Container className="mb-4 flex flex-col justify-between gap-4 lg:flex-row">
            <SubscriptionTier
              extended
              type={subscriptionTiers.basic.type}
              onClick={() =>
                handleSubscriptionChange(subscriptionTiers.basic.type)
              }
            />
            <SubscriptionTier
              extended
              type={subscriptionTiers.premium.type}
              selected={selectedSubscription === subscriptionTiers.premium.type}
              onClick={() =>
                handleSubscriptionChange(subscriptionTiers.premium.type)
              }
            />
            <SubscriptionTier
              extended
              type={subscriptionTiers.gold.type}
              selected={selectedSubscription === subscriptionTiers.gold.type}
              onClick={() =>
                handleSubscriptionChange(subscriptionTiers.gold.type)
              }
            />
          </Container>
          <Container className="text-center">
            <Link
              href={`/artists/${id}/subscription?tier=${selectedSubscription}`}
            >
              <Button>Suscribirse</Button>
            </Link>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}

export { ArtistPageUI };
