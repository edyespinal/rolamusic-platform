"use server";

import { stripe } from "@rola/services/stripe";
import { FormTier } from "../types";
import { db } from "@rola/services/firebase";

async function createNewSubscriptionTier(
  artistId: string,
  artistName: string,
  stripeAccountId: string,
  payload: FormTier
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

async function updateSubscriptionTier(
  artistId: string,
  subscriptionId: string,
  payload: Partial<FormTier>
) {
  await db.artists.updateArtistSubscriptionTier(artistId, subscriptionId, {
    active: payload.active,
    recommended: payload.recommended,
    label: payload.label,
    description: payload.description,
    perks: payload.perks?.map((perk) => perk.text).filter(Boolean) || [],
  });
}

export { createNewSubscriptionTier, updateSubscriptionTier };
