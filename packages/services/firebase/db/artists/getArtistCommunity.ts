import { ArtistCommunity } from "@schemas/artist";
import { doc, getDoc } from "firebase/firestore";
import { artistCommunityCollection } from "../db";

/**
 * Retrieves an artist community by its ID from the community collection.
 * @param {string} id - The ID of the community to retrieve.
 * @return {Promise<ArtistCommunity>} A Promise that resolves with the artist community data, including the ID.
 * @throws {Error} If the community with the given ID is not found.
 */
async function getArtistCommunity(id: string): Promise<ArtistCommunity> {
  const communityDoc = await getDoc(doc(artistCommunityCollection(id), id));

  if (!communityDoc.exists()) {
    throw new Error("Community not found");
  }

  const communityData = {
    ...communityDoc.data(),
    id: communityDoc.id,
  };

  return communityData;
}

export { getArtistCommunity };
