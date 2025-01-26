import { getDocs } from "firebase/firestore";
import { ARTISTS } from "../../../constants";
import { ServiceError } from "../../../utils/serviceError";
import { FirebaseError } from "firebase/app";
import { ArtistSubscriptionTier } from "../../../schemas";
import { subscriptionTiersCollection } from "../utils";

async function getArtistSubscriptionTiers(artistId: string) {
  try {
    const ref = subscriptionTiersCollection(artistId);

    const snapshot = await getDocs(ref);

    if (snapshot.empty) {
      return {
        success: false,
        data: [],
      };
    }

    return {
      success: true,
      data: snapshot.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .sort((a, b) => a.access - b.access),
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

export { getArtistSubscriptionTiers };
