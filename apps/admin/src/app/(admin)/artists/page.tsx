import { services } from "@rola/services/firebase";
import { ArtistsPageUI } from "./ui";

async function ArtistsPage() {
  const artists = await services.getArtists();

  return <ArtistsPageUI artists={artists} />;
}

export default ArtistsPage;
