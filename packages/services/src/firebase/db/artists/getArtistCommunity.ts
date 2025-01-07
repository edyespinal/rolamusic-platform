import { getDoc, doc, FirestoreError } from "firebase/firestore";
import { ArtistCommunity } from "../../../schemas/artist";
import { ServiceError } from "../../../utils/serviceError";
import { ARTISTS } from "../../../constants";
import { artistCommunityCollection } from "../db";

async function getArtistCommunity(id: string): Promise<ArtistCommunity | null> {
  try {
    const ref = doc(artistCommunityCollection(id), id);

    const communityDoc = await getDoc(ref);

    if (!communityDoc.exists()) {
      return null;
    }

    const communityData = {
      ...communityDoc.data(),
      id: communityDoc.id,
    };

    return communityData;
  } catch (e) {
    const error = e as FirestoreError;

    throw new ServiceError({
      service: ARTISTS,
      code: error.code,
      message: error.message,
    });
  }
}

export { getArtistCommunity };
