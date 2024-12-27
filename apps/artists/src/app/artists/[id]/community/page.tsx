import React from "react";
import { db } from "@rola/services/firebase";
import { ArtistCommunityPageUI } from "./ui";
import { redirect } from "next/navigation";
import { stripe } from "@rola/services/stripe";

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

  if (!artist || !artistPayment?.stripeAccountId || !artistCommunity) {
    return redirect("/404");
  }

  const artistBalance = await stripe.accounts.getBalance(
    artistPayment.stripeAccountId
  );

  return (
    <ArtistCommunityPageUI
      artist={artist}
      community={artistCommunity}
      balance={artistBalance}
    />
  );
}

export default ArtistCommunityPage;
