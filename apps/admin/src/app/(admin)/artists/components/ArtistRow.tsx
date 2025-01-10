import React from "react";
import Link from "next/link";
import {
  Artist,
  ArtistCommunity,
  ArtistSubscriptionTier,
} from "@rola/services/schemas";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  Button,
  DropdownMenuContent,
  DropdownMenuItem,
  Container,
  useToast,
} from "@rola/ui/components";
import { MoreVerticalIcon } from "@rola/ui/icons";
import { activateArtist } from "../actions";

function ArtistRow({
  artist,
}: {
  artist: {
    info: Artist;
    community?: ArtistCommunity | null;
    tiers?: ArtistSubscriptionTier[] | null;
  };
}) {
  const [active, setActive] = React.useState(artist.info.active);
  const { toast } = useToast();

  return (
    <Container
      key={artist.info.id}
      className="border-gray-dark flex items-center border-b"
    >
      <Link
        key={artist.info.id}
        href={`/artists/${artist.info.id}`}
        className="hover:bg-background flex h-full w-full p-4"
      >
        <span className="basis-3/5">{artist.info.name}</span>
        <span className="basis-1/5 px-4 text-center">
          {artist.tiers?.length ? "Si" : "No"}
        </span>
        <span className="basis-1/5 px-4 text-center">
          {active ? "Activo" : "No activo"}
        </span>
      </Link>
      <div className="flex-none px-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <MoreVerticalIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={async () => {
                if (!active && !artist.tiers?.length) {
                  toast({
                    title: "Artista sin suscripciones",
                    description: "El artista no tiene suscripciones",
                    variant: "destructive",
                  });

                  return;
                }

                const res = await activateArtist(
                  artist.info.id,
                  !!artist.tiers?.length,
                  artist.info.active
                );

                if (!res.success) {
                  toast({
                    title: "Error",
                    description: res.message,
                    variant: "destructive",
                  });
                }

                setActive(!active);
                toast({
                  title: "Artista actualizado",
                  description: res.message,
                });
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
