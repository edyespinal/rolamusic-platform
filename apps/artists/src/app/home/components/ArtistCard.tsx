"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Container,
  Icon,
  Text,
} from "@rola/ui/components";
import { Artist } from "@rola/services/schemas";
import { cn } from "@rola/tailwind-config/utils";
import { useAtom } from "jotai";
import { currentArtist } from "../../../store";
import { useRouter } from "next/navigation";

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
        "hover:bg-background/50 hover:border-brand hover:cursor-pointer",
        artist.active
          ? "border-gray bg-transparent"
          : "border-red-900 opacity-50"
      )}
      onClick={handleClick}
    >
      <Icon name="square-pen" className="text-brand absolute right-4 top-4" />
      <Avatar className="size-24">
        <AvatarImage src={artist.profileURL} alt={artist.name} />
        <AvatarFallback>
          <Text className="text-4xl font-semibold">{artist.name[0]}</Text>
        </AvatarFallback>
      </Avatar>
      <Container className="text-center">
        <Text className="mb-4 font-semibold">{artist.name}</Text>
        <Text>Fans: {artist.fans.length}</Text>
      </Container>
    </Container>
  );
}

export { ArtistCard };
