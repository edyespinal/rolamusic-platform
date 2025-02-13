import { FirebaseError } from "firebase/app";
import { addDoc } from "firebase/firestore";
import { ARTISTS } from "../../../constants";
import { ServiceError } from "../../../utils/serviceError";
import { ArtistSubscriptionTier } from "../../../schemas";
import { subscriptionTiersCollection } from "../utils";

async function createArtistSubscriptionTier(
  artistId: string,
  payload: Omit<ArtistSubscriptionTier, "id">
) {
  try {
    const tiersRef = subscriptionTiersCollection(artistId);

    const { id } = await addDoc(tiersRef, payload);

    return {
      success: true,
      data: {
        ...payload,
        id,
      },
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

export { createArtistSubscriptionTier };
