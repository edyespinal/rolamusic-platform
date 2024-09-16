import { db } from "@rola/services/firebase";
import { ArtistPageUI } from "./ui";
import { PageProps } from "./types";
import { redirect } from "next/navigation";

async function ArtistPage(props: PageProps) {
  const { id } = props.params;
  const artist = await db.artists.getArtist(id);

  if (!artist) {
    redirect("/404");
  }

  const admin = await db.users.getUser(artist.admin);
  const community = await db.artists.getArtistCommunity(id);

  return <ArtistPageUI artist={artist} community={community} admin={admin} />;
}

export default ArtistPage;
