import React from "react";
import { NewSubscriptionTierPageUI } from "./ui";
import { db } from "@rola/services/firebase";

async function NewSubscriptionTierPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;

  const [artist, paymentDetails] = await Promise.all([
    db.artists.getArtist(id),
    db.artists.getArtistPaymentDetails(id),
  ]);

  if (!artist || !paymentDetails?.stripeAccountId) {
    throw new Error("Algo ha salido mal cargando el artista");
  }

  return (
    <NewSubscriptionTierPageUI
      artistId={artist.id}
      artistName={artist.name}
      stripeAccountId={paymentDetails.stripeAccountId}
    />
  );
}

export default NewSubscriptionTierPage;
