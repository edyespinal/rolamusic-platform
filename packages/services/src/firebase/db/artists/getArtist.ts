import { getDoc, doc, FirestoreError } from "firebase/firestore";
import { ARTISTS } from "../../../constants";
import { Artist } from "../../../schemas/artist";
import { ServiceError } from "../../../utils/serviceError";
import { artistsCollection } from "../utils";

export async function getArtist(id: string): Promise<Artist | null> {
  try {
    const ref = doc(artistsCollection, id);
    const artistDoc = await getDoc(ref);

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
