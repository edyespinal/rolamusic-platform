import { ArtistPageUI } from "./ui";
import { services } from "@rola/services/firebase";

async function ArtistPage(props: { params: { id: string } }) {
  const { id } = props.params;
  const artist = await services.getArtist(id);
  const community = await services.getArtistCommunity(id);

  return <ArtistPageUI artist={artist} community={community} />;
}

export default ArtistPage;
