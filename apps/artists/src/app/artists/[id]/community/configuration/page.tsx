import { db } from "@rola/services/firebase";
import { CommunityConfigurationPageUI } from "./ui";
import { redirect } from "next/navigation";
import { IncompleteProfileUI } from "../incomplete-profile.ui";

async function CommunityConfigurationPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  let [artist, tiers, payment] = await Promise.all([
    db.artists.getArtist(id),
    db.artists.getArtistSubscriptionTiers(id),
    db.artists.getArtistPaymentDetails(id),
  ]);

  if (!artist || !payment?.stripeAccountId) {
    const missingData = !artist
      ? "tu información de artista"
      : "tus datos bancarios y fiscales";

    return <IncompleteProfileUI missingData={missingData} />;
  }

  if (!tiers) {
    tiers = [];
  }

  return (
    <CommunityConfigurationPageUI
      artistId={id}
      artistName={artist.name}
      stripeAccountId={payment.stripeAccountId}
      tiers={tiers}
    />
  );
}

export default CommunityConfigurationPage;
