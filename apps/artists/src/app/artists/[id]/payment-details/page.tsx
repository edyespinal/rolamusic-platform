import { redirect } from "next/navigation";
import { db } from "@rola/services/firebase";
import { ArtistPaymentDetailsUI } from "./ui";

async function ArtistPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const artist = await db.artists.getArtist(id);
  const payment = await db.artists.getArtistPaymentDetails(id);

  if (!artist) {
    throw new Error("Algo ha salido mal cargando la información del artista");
  }

  return <ArtistPaymentDetailsUI artist={artist} payment={payment} />;
}

export default ArtistPage;
