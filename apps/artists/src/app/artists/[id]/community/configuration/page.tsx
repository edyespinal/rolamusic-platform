import { db } from "@rola/services/firebase";
import { CommunityConfigurationPageUI } from "./ui";
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
    const link = !artist
      ? {
          href: `/artists/${id}`,
          text: "tu información de artista",
        }
      : {
          href: `/artists/${id}/payment-details`,
          text: "tus datos bancarios y fiscales",
        };

    return <IncompleteProfileUI link={link} />;
  }

  return (
    <CommunityConfigurationPageUI
      artistId={id}
      artistName={artist.name}
      stripeAccountId={payment.stripeAccountId}
      tiers={tiers.data || []}
    />
  );
}

export default CommunityConfigurationPage;
