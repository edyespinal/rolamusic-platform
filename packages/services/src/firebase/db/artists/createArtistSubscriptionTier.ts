import { FirebaseError } from "firebase/app";
import {
  collection,
  addDoc,
  doc,
  setDoc,
  arrayUnion,
} from "firebase/firestore";
import { ARTISTS, SUBSCRIPTION_TIERS } from "../../../constants";
import { ServiceError } from "../../../utils/serviceError";
import { artistCommunityCollection, db } from "../db";
import { ArtistSubscriptionTier } from "../../../schemas";

async function createArtistSubscriptionTier(
  artistId: string,
  payload: Omit<ArtistSubscriptionTier, "id">
) {
  try {
    const tiersRef = collection(db, ARTISTS, artistId, SUBSCRIPTION_TIERS);
    const communityRef = doc(artistCommunityCollection(artistId), artistId);

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
