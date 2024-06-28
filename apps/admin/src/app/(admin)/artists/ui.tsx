"use client";

import { Container, Title } from "@rola/ui/components";
import { ArtistRow } from "./components/ArtistRow";
import { PageUIProps } from "./types";

function ArtistsPageUI({ artists }: PageUIProps) {
  return (
    <Container>
      <Title order={3} align="left" className="pb-4">
        Artistas
      </Title>
      <div>
        {artists.map((artist) => (
          <ArtistRow key={artist.id} artist={artist} />
        ))}
      </div>
    </Container>
  );
}

export { ArtistsPageUI };
