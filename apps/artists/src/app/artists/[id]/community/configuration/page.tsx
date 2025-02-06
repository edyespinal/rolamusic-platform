import { db } from "@rola/services/firebase";
import { CommunityConfigurationPageUI } from "./ui";
import { IncompleteProfileUI } from "../incomplete-profile.ui";

async function CommunityConfigurationPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const [artist, tiers] = await Promise.all([
    db.artists.getArtist(id),
    db.artists.getArtistSubscriptionTiers(id),
    db.artists.getArtistPaymentDetails(id),
  ]);

  if (!artist) {
    return (
      <IncompleteProfileUI
        info={{
          href: `/artists/${id}`,
          missing: "tu información de artista",
        }}
      />
    );
  }

  return (
    <CommunityConfigurationPageUI artistId={id} tiers={tiers.data || []} />
  );
}

export default CommunityConfigurationPage;
