import { services } from "@rola/services/firebase";
import { ArtistPageUI } from "./ui";
import { PageProps } from "./types";

async function ArtistPage(props: PageProps) {
  const { id } = props.params;
  const artist = await services.getArtist(id);
  const admin = await services.getUser(artist.admin);
  const community = await services.getArtistCommunity(id);

  return <ArtistPageUI artist={artist} community={community} admin={admin} />;
}

export default ArtistPage;
