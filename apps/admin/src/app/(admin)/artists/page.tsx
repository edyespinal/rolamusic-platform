import { db } from "@rola/services/firebase";
import { ArtistsPageUI } from "./ui";
import { redirect } from "next/navigation";

async function ArtistsPage() {
  const artists = await db.artists.getArtists();

  if (!artists) {
    redirect("/404");
  }

  return <ArtistsPageUI artists={artists} />;
}

export default ArtistsPage;
