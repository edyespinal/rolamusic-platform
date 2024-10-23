import { db } from "@rola/services/firebase";
import { ArtistPageUI } from "./ui";
import { redirect } from "next/navigation";

async function ArtistPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const artist = await db.artists.getArtist(id);
  let community = await db.artists.getArtistCommunity(id);

  if (!artist) {
    redirect("/404");
  }

  return (
    <ArtistPageUI
      id={artist.id}
      name={artist.name}
      coverURL={artist.coverURL}
      profileURL={artist.profileURL}
      genres={artist.genres}
      bio={artist.bio}
      songs={community?.songs ?? []}
    />
  );
}

export default ArtistPage;
