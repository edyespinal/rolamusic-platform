"use client";

import Image from "next/image";
import { ArtistAvatar } from "@components/ArtistAvatar/ArtistAvatar";
import { formatGenres, Genre } from "@rola/services/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Container,
  Dialog,
  DialogContent,
  Text,
  Title,
} from "@rola/ui/components";
import {
  ArtistCommunity,
  ArtistSubscriptionTier,
} from "@rola/services/schemas";
import { SubscriptionTier } from "@components/SubscriptionTier/SubscriptionTier";

type ArtistPageProps = {
  id: string;
  name: string;
  coverURL?: string;
  profileURL?: string;
  genres: Genre[];
  bio?: string;
  community: ArtistCommunity;
  subscriptionTiers: ArtistSubscriptionTier[];
  supporting?: {
    id: string;
    name: string;
    tier: string;
    profileURL: string;
    genres: Genre[];
    type: string;
  } | null;
};

function ArtistPageUI({
  id,
  name,
  coverURL,
  profileURL,
  genres,
  bio,
  community,
  subscriptionTiers,
  supporting,
}: ArtistPageProps) {
  return (
    <Container>
      <Container className="bg-background-dark relative -mt-20 min-h-[25vh] lg:min-h-[50vh]">
        <Image
          src={coverURL ?? "/static/img/artists-landing-header.jpg"}
          alt={name}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </Container>

      <Container size="lg" className="flex justify-center">
        <ArtistAvatar
          image={profileURL}
          name={name}
          size="xl"
          className="-mt-8"
        />
      </Container>

      <Container
        size="lg"
        className="mb-24 flex flex-col px-4 lg:flex-row lg:gap-12 lg:px-0"
      >
        <Container className="flex flex-col">
          <Container className="pb-4 pt-8 text-center">
            <Title order={2} className="font-bold">
              {name}
            </Title>
            <Text className="text-brand">{formatGenres(genres)}</Text>
            <Text className="py-4">
              69 miembros <span className="px-4"> | </span> 42 publicaciones
            </Text>
          </Container>

          <Text className="pb-8 text-justify">{bio}</Text>

          {!supporting && subscriptionTiers.length > 0 && (
            <Container>
              <Title order={2} underline className="pb-12 uppercase">
                Elige tu suscripción
              </Title>
              <Carousel>
                <CarouselContent>
                  {subscriptionTiers.map((tier, i) => (
                    <CarouselItem className="lg:basis-1/3">
                      <SubscriptionTier
                        key={tier.name}
                        artistId={id}
                        tier={tier}
                        highlighted={i === 1 ? "Recomendada" : undefined}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <Container className="mb-4 flex flex-col justify-between gap-8 pb-2 lg:flex-row"></Container>
            </Container>
          )}
        </Container>
      </Container>
    </Container>
  );
}

export { ArtistPageUI };
