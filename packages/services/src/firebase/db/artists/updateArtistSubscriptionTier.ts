import { doc, getDocs, setDoc } from "firebase/firestore";
import { ARTISTS } from "../../../constants";
import { ServiceError } from "../../../utils/serviceError";
import { FirebaseError } from "firebase/app";
import { ArtistSubscriptionTier } from "../../../schemas";
import { subscriptionTiersCollection } from "../utils";
import { batch } from "../db";

async function updateArtistSubscriptionTier(
  artistId: string,
  subscriptionId: string,
  payload: Partial<ArtistSubscriptionTier>
) {
  try {
    const tierRef = doc(subscriptionTiersCollection(artistId), subscriptionId);

    if (!payload.recommended) {
      await setDoc(tierRef, payload, { merge: true });

      return {
        success: true,
        data: payload,
      };
    }

    batch.update(tierRef, payload);

    const tiersCollectionRef = subscriptionTiersCollection(artistId);
    const docs = await getDocs(tiersCollectionRef);

    for (const doc of docs.docs) {
      if (doc.id !== subscriptionId) {
        batch.update(doc.ref, { recommended: false });
      }
    }

    await batch.commit();

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
