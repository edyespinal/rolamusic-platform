"use client";

import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Container,
  Text,
} from "@rola/ui/components";
import { SquarePenIcon } from "@rola/ui/icons";
import { Artist } from "@rola/services/schemas";
import { cn } from "@rola/tailwind-config/utils";
import { currentArtist } from "../../store";

function ArtistCard({ artist }: { artist: Artist }) {
  const router = useRouter();
  const [, setCurrentArtist] = useAtom(currentArtist);

  function handleClick() {
    setCurrentArtist(artist);
    router.push(`/artists/${artist.id}`);
  }

  return (
    <Container
      className={cn(
        "relative grid size-72 place-items-center gap-4 rounded-xl border p-4",
        "hover:bg-background/50 hover:cursor-pointer",
        artist.active
          ? "border-gray hover:border-brand bg-transparent"
          : "border-destructive bg-background-dark hover:border-gray"
      )}
      onClick={handleClick}
    >
      {!artist.active && (
        <span className="bg-destructive absolute -top-2 left-4 w-32 rounded-br-xl rounded-tl-xl px-4 text-sm">
          No activo
        </span>
      )}
      <SquarePenIcon className="text-brand absolute right-4 top-4" />
      <Avatar className="size-24">
        <AvatarImage src={artist.profileURL} alt={artist.name} />
        <AvatarFallback>
          <Text className="text-4xl font-semibold">{artist.name[0]}</Text>
        </AvatarFallback>
      </Avatar>
      <Container className="text-center">
        <Text className="mb-4 font-semibold">{artist.name}</Text>
        <Text>Fans: {artist.fansSummary?.total || 0}</Text>
      </Container>
    </Container>
  );
}

export { ArtistCard };
