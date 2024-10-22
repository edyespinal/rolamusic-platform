import { setDoc, doc } from "firebase/firestore";
import { Artist } from "../../../schemas";
import { artistsCollection } from "../db";

async function updateArtist(id: string, data: Partial<Artist>) {
  try {
    await setDoc(doc(artistsCollection, id), data, { merge: true });

    return {
      success: true,
    };
  } catch (error) {
    throw new Error("Error updating artist");
  }
}

export { updateArtist };
