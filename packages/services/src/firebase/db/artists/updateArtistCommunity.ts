import { setDoc, doc, FirestoreError } from "firebase/firestore";
import { ARTISTS } from "../../../constants";
import { ArtistCommunity } from "../../../schemas/artist";
import { ServiceError } from "../../../utils/serviceError";
import { artistCommunityCollection } from "../db";

/**
 * Updates an artist community in the artist community collection.
 *
 * @param {string} id - The ID of the artist community to update.
 * @param {Partial<ArtistCommunity>} data - The data to update the artist community with.
 * @return {Promise<boolean>} A promise that resolves with a boolean indicating if the update was successful.
 * @throws {ServiceError} If the update fails.
 */
async function updateArtistCommunity(
  id: string,
  data: Partial<ArtistCommunity>
): Promise<boolean> {
  try {
    await setDoc(doc(artistCommunityCollection(id), id), data, { merge: true });

    return true;
  } catch (e) {
    const error = e as FirestoreError;

    throw new ServiceError({
      service: ARTISTS,
      code: error.code,
      message: error.message,
    });
  }
}

export { updateArtistCommunity };
