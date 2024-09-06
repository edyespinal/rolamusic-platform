import { doc, getDoc, setDoc } from "firebase/firestore";
import { ArtistCommunity } from "@schemas/artist";
import { artistCommunityCollection } from "../db";

/**
 * Updates an artist community with the given data.
 *
 * @param {string} id - The ID of the artist community to update.
 * @param {Partial<ArtistCommunity>} data - The data to update the community with.
 * @return {Promise<boolean>} A Promise that resolves with true if the update was successful, or rejects with an error message if the update failed.
 * @throws {Error} If the update failed.
 */
async function updateArtistCommunity(
  id: string,
  data: Partial<ArtistCommunity>
): Promise<boolean> {
  try {
    await setDoc(doc(artistCommunityCollection(id), id), data, { merge: true });

    return true;
  } catch (error) {
    throw new Error("Error updating community");
  }
}

export { updateArtistCommunity };
