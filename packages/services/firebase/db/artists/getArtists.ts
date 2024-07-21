import { getDocs } from "firebase/firestore";
import { Artist } from "../../../schemas";
import { artistsCollection } from "../db";

/**
 * Retrieves a list of artists from the database.
 *
 * @return {Promise<Artist[]>} A Promise that resolves to an array of artist data.
 * @throws {Error} If no artists are found.
 */
export async function getArtists(): Promise<Artist[]> {
  const artistsDocs = await getDocs(artistsCollection);

  if (artistsDocs.empty) {
    throw new Error("Artists not found");
  }

  const artistData = artistsDocs.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  return artistData;
}
