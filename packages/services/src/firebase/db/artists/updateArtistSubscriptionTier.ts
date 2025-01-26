import { doc, setDoc } from "firebase/firestore";
import { ARTISTS } from "../../../constants";
import { ServiceError } from "../../../utils/serviceError";
import { FirebaseError } from "firebase/app";
import { ArtistSubscriptionTier } from "../../../schemas";
import { subscriptionTiersCollection } from "../utils";

async function updateArtistSubscriptionTier(
  artistId: string,
  subscriptionId: string,
  payload: Partial<ArtistSubscriptionTier>
) {
  try {
    const ref = doc(subscriptionTiersCollection(artistId), subscriptionId);

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
