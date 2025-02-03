import { currentUser } from "@clerk/nextjs/server";
import { db } from "@rola/services/firebase";
import { ArtistPageUI } from "./ui";

async function ArtistPage(props: { params: { id: string } }) {
  const { id } = props.params;

  const [user, artist] = await Promise.all([
    currentUser(),
    db.artists.getArtist(id),
  ]);

  if (!artist || !user) {
    throw new Error("Algo ha salido mal cargando la información del artista");
  }

  return <ArtistPageUI userId={user.id} artist={artist} />;
}

export default ArtistPage;
