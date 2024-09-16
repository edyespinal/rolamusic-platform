import { getDoc, doc, FirestoreError } from "firebase/firestore";
import { ARTISTS } from "../../../constants";
import { Artist } from "../../../schemas/artist";
import { ServiceError } from "../../../utils/serviceError";
import { artistsCollection } from "../db";

/**
 * Retrieves an artist by its id from the artists collection.
 *
 * @param {string} id - The id of the artist to retrieve.
 * @return {Promise<Artist | null>} A promise that resolves with the artist data, including the ID,
 * or null if the artist is not found.
 * @throws {ServiceError} If the query fails.
 */
export async function getArtist(id: string): Promise<Artist | null> {
  try {
    const artistDoc = await getDoc(doc(artistsCollection, id));

    if (!artistDoc.exists()) {
      return null;
    }

    const artistData = {
      ...artistDoc.data(),
      id: artistDoc.id,
    };

    return artistData;
  } catch (e) {
    const error = e as FirestoreError;

    throw new ServiceError({
      service: ARTISTS,
      code: error.code,
      message: error.message,
    });
  }
}
