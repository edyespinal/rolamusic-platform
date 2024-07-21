import { getDoc, doc } from "firebase/firestore";
import { Artist } from "../../../schemas";
import { artistsCollection } from "../db";

/**
 * Retrieves an artist by their ID from the artists collection.
 *
 * @param {string} id - The ID of the artist to retrieve.
 * @return {Promise<Artist>} A Promise that resolves with the artist data, including the ID.
 * @throws {Error} If the artist with the given ID is not found.
 */
export async function getArtist(id: string): Promise<Artist> {
  const artistDoc = await getDoc(doc(artistsCollection, id));

  if (!artistDoc.exists()) {
    throw new Error("Artist not found");
  }

  const artistData = {
    ...artistDoc.data(),
    id: artistDoc.id,
  };

  return artistData;
}
