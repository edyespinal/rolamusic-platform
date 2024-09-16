import { query, limit, getDocs, FirestoreError } from "firebase/firestore";
import { ARTISTS } from "../../../constants";
import { Artist } from "../../../schemas/artist";
import { ServiceError } from "../../../utils/serviceError";
import { artistsCollection } from "../db";

/**
 * Retrieves a list of artists from the artists collection.
 *
 * @param {number} [pageSize=10] - The number of artists to retrieve.
 * @return {Promise<Artist[]>} A Promise that resolves with an array of artist data, including the ID.
 * @throws {ServiceError} If the query fails.
 */
export async function getArtists(pageSize = 10): Promise<Artist[]> {
  try {
    const artistsQuery = query(artistsCollection, limit(pageSize));
    const artistsDocs = await getDocs(artistsQuery);

    if (artistsDocs.empty) {
      return [];
    }

    const artistData = artistsDocs.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });

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
