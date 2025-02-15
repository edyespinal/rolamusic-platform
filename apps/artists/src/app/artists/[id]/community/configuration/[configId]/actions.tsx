"use server";

import { FormTier } from "../types";
import { db } from "@rola/services/firebase";

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

export { updateSubscriptionTier };
