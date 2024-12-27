import { addDoc } from "firebase/firestore";
import { ARTISTS } from "../../../constants";
import { ServiceError } from "../../../utils/serviceError";
import { FirebaseError } from "firebase/app";
import { artistSubscriptionTiersCollection } from "../db";
import { ArtistSubscriptionTier } from "../../../schemas";

async function createArtistSubscriptionTier(
  artistId: string,
  payload: Omit<ArtistSubscriptionTier, "id">
) {
  try {
    const ref = artistSubscriptionTiersCollection(artistId);

    await addDoc(ref, payload);

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

export { createArtistSubscriptionTier };
