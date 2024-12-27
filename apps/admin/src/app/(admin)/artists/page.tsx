import { db } from "@rola/services/firebase";
import { ArtistsPageUI } from "./ui";
import { redirect } from "next/navigation";
import {
  Artist,
  ArtistCommunity,
  ArtistSubscriptionTier,
} from "@rola/services/schemas";

async function ArtistsPage() {
  const artists = await db.artists.getArtists(50);
  const artistsInfo: Array<{
    info: Artist;
    community?: ArtistCommunity | null;
    tiers?: ArtistSubscriptionTier[] | null;
  }> = [];

  for (const artist of artists) {
    const [community, tiers] = await Promise.all([
      db.artists.getArtistCommunity(artist.id),
      db.artists.getArtistSubscriptionTiers(artist.id),
    ]);

    artistsInfo.push({
      info: artist,
      community,
      tiers,
    });
  }

  if (!artists) {
    redirect("/404");
  }

  return <ArtistsPageUI artists={artistsInfo} />;
}

export default ArtistsPage;
