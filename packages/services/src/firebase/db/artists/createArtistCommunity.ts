import { FirestoreError, setDoc } from "firebase/firestore";
import { ServiceError } from "../../../utils/serviceError";
import { ARTISTS } from "../../../constants";
import { artistCommunityCollection } from "../utils";

async function createArtistCommunity(artistId: string) {
  try {
    const ref = artistCommunityCollection(artistId);

    await setDoc(ref, {
      totalSubscribers: 0,
      totalPosts: 0,
      topFans: [],
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
