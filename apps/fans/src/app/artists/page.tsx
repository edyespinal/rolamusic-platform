import { currentUser } from "@clerk/nextjs/server";
import { db } from "@rola/services/firebase";
import { ArtistsPageUI } from "./ui";

async function ArtistsPage() {
  const artists = await db.artists.getActiveArtists(20);

  if (!artists) {
    throw new Error("Algo ha salido mal cargando los artistas");
  }

  const user = await currentUser();

  if (!user) {
    return <ArtistsPageUI artists={artists} supporting={null} />;
  }

  const supporting = await db.users.getUserArtistsSubscriptions(user.id);

  return <ArtistsPageUI artists={artists} supporting={supporting.data} />;
}

export default ArtistsPage;
