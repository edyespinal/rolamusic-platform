import { FirebaseError } from "firebase/app";
import { addDoc, setDoc, arrayUnion } from "firebase/firestore";
import { ARTISTS } from "../../../constants";
import { ServiceError } from "../../../utils/serviceError";
import { ArtistSubscriptionTier } from "../../../schemas";
import {
  artistCommunityCollection,
  subscriptionTiersCollection,
} from "../utils";

async function createArtistSubscriptionTier(
  artistId: string,
  payload: Omit<ArtistSubscriptionTier, "id">
) {
  try {
    const tiersRef = subscriptionTiersCollection(artistId);
    const communityRef = artistCommunityCollection(artistId);

    const { id } = await addDoc(tiersRef, payload);

    await setDoc(
      communityRef,
      {
        subscriptions: {
          tiers: arrayUnion({
            subscribers: [],
            tier: {
              id,
              active: payload.active,
              label: payload.label,
            },
          }),
        },
      },
      { merge: true }
    );

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
