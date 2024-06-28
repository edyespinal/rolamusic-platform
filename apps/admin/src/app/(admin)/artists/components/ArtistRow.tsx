import React from "react";
import Link from "next/link";

import { Artist } from "@rola/services/schemas";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  Button,
  Icon,
  DropdownMenuContent,
  DropdownMenuItem,
  Container,
} from "@rola/ui/components";
import { activateArtist } from "../actions";

type ComponentProps = {
  artist: Artist;
};

function ArtistRow({ artist }: ComponentProps) {
  const [active, setActive] = React.useState(artist.active);

  return (
    <Container
      key={artist.id}
      className="flex items-center border-b border-gray-dark p-2 hover:bg-card"
    >
      <Link
        key={artist.id}
        href={`/artists/${artist.id}`}
        className="flex grow"
      >
        <span className="grow">{artist.name}</span>
        <span className="flex-none px-4">
          {active ? "Activo" : "No activo"}
        </span>
      </Link>
      <div className="flex-none px-8">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <Icon name="more-vertical" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={async () => {
                await activateArtist(artist.id, !artist.active);
                setActive(!active);
              }}
            >
              {active ? "Desactivar" : "Activar"}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Container>
  );
}

export { ArtistRow };
