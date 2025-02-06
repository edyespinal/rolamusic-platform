import { FirebaseError } from "firebase/app";
import { arrayUnion, doc } from "firebase/firestore";
import { ARTISTS } from "../../../constants";
import { ServiceError } from "../../../utils/serviceError";
import { ArtistSubscriptionTier } from "../../../schemas";
import {
  artistCommunityCollection,
  subscriptionTiersCollection,
} from "../utils";
import { batch } from "../db";

async function createArtistSubscriptionTier(
  artistId: string,
  payload: Omit<ArtistSubscriptionTier, "id">
) {
  try {
    const tierRef = doc(subscriptionTiersCollection(artistId));
    const communityRef = artistCommunityCollection(artistId);

    batch.set(tierRef, payload);

    batch.update(communityRef, {
      subscriptions: {
        tiers: arrayUnion({
          subscribers: [],
          tier: {
            id: tierRef.id,
            active: payload.active,
            label: payload.label,
          },
        }),
      },
    });

    await batch.commit();

    return {
      success: true,
      data: {
        ...payload,
        id: tierRef.id,
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
