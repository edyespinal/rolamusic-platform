import { doc, FirestoreError, setDoc } from "firebase/firestore";
import { ServiceError } from "../../../utils/serviceError";
import { ARTISTS, COMMUNITY_INFO } from "../../../constants";
import { db } from "../db";

async function createArtistCommunity(artistId: string) {
  try {
    const ref = doc(db, ARTISTS, artistId, COMMUNITY_INFO, artistId);

    await setDoc(ref, {
      posts: [],
      subscriptions: {
        total: 0,
        topFans: [],
        tiers: [],
      },
    });
  } catch (e) {
    const error = e as FirestoreError;

    throw new ServiceError({
      service: ARTISTS,
      code: error.code,
      message: error.message,
    });
  }
}

export { createArtistCommunity };
