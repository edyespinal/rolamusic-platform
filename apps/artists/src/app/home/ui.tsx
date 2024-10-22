import Link from "next/link";
import { Footer } from "@components/Footer/Footer";
import { Header } from "@components/Header/Header";
import { Button, Container, Text, Title, Underline } from "@rola/ui/components";
import { Artist } from "@rola/services/schemas";
import { ArtistCard } from "./components/ArtistCard";

type HomePageProps = {
  artists: Artist[];
};

function HomePageUI({ artists }: HomePageProps) {
  return (
    <Container size="xl" className="grid h-svh grid-rows-[auto_1fr_auto]">
      <Header />
      <Container size="full" className="h-full py-12">
        <Container className="mb-8">
          <Title order={2}>
            {artists.length === 0
              ? "Crea el perfil de tu artista"
              : "Mis artistas"}
          </Title>
          <Underline />
        </Container>

        {artists.length === 0 ? (
          <Container className="mx-auto text-center">
            <Text>
              Aún no tienes artistas vinculados a tu cuenta. <br />
              Crea un nuevo artista para que puedas publicarlo en la plataforma.
            </Text>
          </Container>
        ) : (
          <Container size="full" className="mx-auto text-center">
            <Text>Selecciona el artista que deseas editar</Text>

            <Container
              size="lg"
              className="flex flex-wrap justify-center gap-8 pt-8"
            >
              {artists.map((artist) => (
                <ArtistCard artist={artist} />
              ))}
            </Container>
          </Container>
        )}

        <Container className="mt-24 text-center">
          <Link href="/artists/new">
            <Button>Crear artista</Button>
          </Link>
        </Container>
      </Container>
      <Footer />
    </Container>
  );
}

export { HomePageUI };
