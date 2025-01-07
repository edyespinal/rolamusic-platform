import React from "react";
import { db } from "@rola/services/firebase";
import { ArtistCommunityPageUI } from "./ui";
import { stripe } from "@rola/services/stripe";
import { IncompleteProfileUI } from "./incomplete-profile.ui";

async function ArtistCommunityPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const artistPromise = db.artists.getArtist(id);
  const artistPaymentPromise = db.artists.getArtistPaymentDetails(id);
  const artistCommunityPromise = db.artists.getArtistCommunity(id);

  const [artist, artistPayment, artistCommunity] = await Promise.all([
    artistPromise,
    artistPaymentPromise,
    artistCommunityPromise,
  ]);

  if (!artist || !artistPayment?.stripeAccountId) {
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

  const artistBalance = await stripe.accounts.getBalance(
    artistPayment.stripeAccountId
  );

  return (
    <ArtistCommunityPageUI
      artist={artist}
      community={artistCommunity || null}
      balance={artistBalance}
    />
  );
}

export default ArtistCommunityPage;
