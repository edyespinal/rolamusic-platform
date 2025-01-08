import { doc, setDoc } from "firebase/firestore";
import { ARTISTS, SUBSCRIPTION_TIERS } from "../../../constants";
import { ServiceError } from "../../../utils/serviceError";
import { FirebaseError } from "firebase/app";
import { db } from "../db";
import { ArtistSubscriptionTier } from "../../../schemas";

async function updateArtistSubscriptionTier(
  artistId: string,
  subscriptionId: string,
  payload: Partial<ArtistSubscriptionTier>
) {
  try {
    const ref = doc(db, ARTISTS, artistId, SUBSCRIPTION_TIERS, subscriptionId);

    await setDoc(ref, payload, { merge: true });

    return {
      success: true,
      data: payload,
    };
  } catch (e) {
    const error = e as FirebaseError;

    throw new ServiceError({
      service: ARTISTS,
      code: error.code ?? "unknown",
      message: error.message ?? "unknown",
    });
  }
}

export { updateArtistSubscriptionTier };
