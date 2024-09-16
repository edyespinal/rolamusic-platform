import { getDoc, doc, FirestoreError } from "firebase/firestore";
import { ArtistCommunity } from "../../../schemas/artist";
import { ServiceError } from "../../../utils/serviceError";
import { ARTISTS } from "../../../constants";
import { artistCommunityCollection } from "../db";

/**
 * Retrieves an artist community by its id from the artist community collection.
 *
 * @param {string} id - The id of the artist community to retrieve.
 * @return {Promise<ArtistCommunity | null>} A promise that resolves with the artist community data,
 * or null if the artist community is not found.
 * @throws {ServiceError} If the query fails.
 */
async function getArtistCommunity(id: string): Promise<ArtistCommunity | null> {
  try {
    const communityDoc = await getDoc(doc(artistCommunityCollection(id), id));

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
