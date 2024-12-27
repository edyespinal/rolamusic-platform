"use client";

import { Container, Title } from "@rola/ui/components";
import { ArtistRow } from "./components/ArtistRow";
import {
  Artist,
  ArtistCommunity,
  ArtistSubscriptionTier,
} from "@rola/services/schemas";

function ArtistsPageUI({
  artists,
}: {
  artists: Array<{
    info: Artist;
    community?: ArtistCommunity | null;
    tiers?: ArtistSubscriptionTier[] | null;
  }>;
}) {
  return (
    <Container>
      <Title order={3} align="left" className="pb-4">
        Artistas
      </Title>
      <Container className="border-gray-dark flex items-center border-b">
        <div className="hover:bg-background flex h-full w-full p-4">
          <span className="basis-3/5">Nombre</span>
          <span className="basis-1/5 px-4 text-center">Suscripciones</span>
          <span className="basis-1/5 px-4 text-center">Activo</span>
        </div>
        <div className="flex-none px-8">Menú</div>
      </Container>
      {artists.map((artist) => (
        <ArtistRow key={artist.info.id} artist={artist} />
      ))}
    </Container>
  );
}

export { ArtistsPageUI };
