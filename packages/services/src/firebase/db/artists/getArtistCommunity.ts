import { getDoc, FirestoreError } from "firebase/firestore";
import { ArtistCommunity } from "../../../schemas/artist";
import { ServiceError } from "../../../utils/serviceError";
import { ARTISTS } from "../../../constants";
import { artistCommunityCollection } from "../utils";

async function getArtistCommunity(
  artistId: string
): Promise<ArtistCommunity | null> {
  try {
    const ref = artistCommunityCollection(artistId);

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
