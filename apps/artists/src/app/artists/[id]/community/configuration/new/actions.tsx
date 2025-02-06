"use server";

import { stripe } from "@rola/services/stripe";
import { db } from "@rola/services/firebase";
import { FormTier } from "../types";

async function createNewSubscriptionTier(
  artistId: string,
  artistName: string,
  stripeAccountId: string,
  payload: Omit<FormTier, "id">
) {
  const price = await stripe.prices.createPrice(
    artistName,
    stripeAccountId,
    payload.name,
    payload.price * 100
  );

  await db.artists.createArtistSubscriptionTier(artistId, {
    active: payload.active,
    access: payload.access,
    recommended: payload.recommended,
    name: payload.name,
    label: payload.label,
    description: payload.description,
    prices: {
      monthly: {
        value: price.data.monthly.unit_amount || 0,
        priceId: price.data.monthly.id,
      },
      yearly: {
        value: price.data.yearly.unit_amount || 0,
        priceId: price.data.yearly.id,
      },
    },
    perks: payload.perks.map((perk) => perk.text),
  });
}

export { createNewSubscriptionTier };
