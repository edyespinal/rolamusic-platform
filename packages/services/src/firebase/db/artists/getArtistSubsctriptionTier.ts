import { doc, getDoc } from "firebase/firestore";
import { ARTISTS } from "../../../constants";
import { ServiceError } from "../../../utils/serviceError";
import { FirebaseError } from "firebase/app";
import { subscriptionTiersCollection } from "../utils";

async function getArtistSubscriptionTier(artistId: string, tierId: string) {
  try {
    const ref = doc(subscriptionTiersCollection(artistId), tierId);

    const snapshot = await getDoc(ref);

    if (!snapshot.exists()) {
      return {
        success: false,
        data: [],
      };
    }

    return {
      success: true,
      data: {
        ...snapshot.data(),
        id: snapshot.id,
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

export { getArtistSubscriptionTier };
