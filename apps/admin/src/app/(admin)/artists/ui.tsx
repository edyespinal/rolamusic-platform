"use client";

import { Artist } from "@rola/services/schemas";
import { Container } from "@rola/ui/components";

import { ArtistRow } from "./components/ArtistRow";

type PageProps = {
  artists: Artist[];
};

function ArtistsPageUI({ artists }: PageProps) {
  return (
    <Container>
      <h1 className="text-2xl font-semibold pb-4">Artists</h1>
      <div>
        {artists.map((artist) => (
          <ArtistRow key={artist.id} artist={artist} />
        ))}
      </div>
    </Container>
  );
}

export { ArtistsPageUI };
