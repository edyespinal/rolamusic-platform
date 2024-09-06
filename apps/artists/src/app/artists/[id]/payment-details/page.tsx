import { services } from "@rola/services/firebase";
import { ArtistPaymentDetailsUI } from "./ui";

async function ArtistPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const artist = await services.getArtist(id);
  const payment = await services.getArtistPaymentDetails(id);

  return <ArtistPaymentDetailsUI artist={artist} payment={payment} />;
}

export default ArtistPage;
