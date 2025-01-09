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
  Text,
  Title,
} from "@rola/ui/components";
import {
  ArtistCommunity,
  ArtistSubscriptionTier,
  User,
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
  supporting?: User["supporting"][number];
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
      <Container className="bg-background-dark relative -mt-20 min-h-[40vh] lg:min-h-[50vh]">
        <Image
          src={coverURL ?? "/static/img/artists-landing-header.jpg"}
          alt={name}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </Container>

      <Container size="xl" className="flex justify-center">
        <ArtistAvatar
          image={profileURL}
          name={name}
          size="xl"
          className="-mt-8"
        />
      </Container>

      <Container
        size="xl"
        className="mb-24 flex flex-col px-4 lg:flex-row lg:gap-12 lg:px-0"
      >
        <Container className="flex flex-col">
          <Container className="pb-4 pt-8 text-center">
            <Title order={2} className="font-bold">
              {name}
            </Title>
            <Text className="text-brand">{formatGenres(genres)}</Text>
            <Text className="py-4">
              {community?.subscriptions.total ?? 0} miembros{" "}
              <span className="px-4"> | </span> {community?.posts.length ?? 0}{" "}
              publicaciones
            </Text>
          </Container>

          <Text className="pb-8 text-justify">{bio}</Text>

          {!supporting && subscriptionTiers.length > 0 && (
            <Container className="mx-auto max-w-80 lg:max-w-full">
              <Title order={2} underline className="pb-12 uppercase">
                Elige tu suscripción
              </Title>
              <Carousel>
                <CarouselContent>
                  {subscriptionTiers.map((tier, i) => {
                    if (!tier.active) {
                      return null;
                    }

                    return (
                      <CarouselItem key={i} className="mx-auto lg:basis-1/3">
                        <SubscriptionTier
                          key={tier.name}
                          artistId={id}
                          tier={tier}
                          highlighted={
                            tier.recommended ? "Recomendada" : undefined
                          }
                        />
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <CarouselPrevious className="-left-8 lg:-left-12" />
                <CarouselNext className="-right-8 lg:-right-12" />
              </Carousel>
            </Container>
          )}
        </Container>
      </Container>
    </Container>
  );
}

export { ArtistPageUI };
