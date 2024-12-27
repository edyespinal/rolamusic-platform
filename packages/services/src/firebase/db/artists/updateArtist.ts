import { setDoc, doc } from "firebase/firestore";
import { FirebaseError } from "firebase/app";
import { Artist } from "../../../schemas";
import { artistsCollection } from "../db";
import { ARTISTS } from "../../../constants";
import { ServiceError } from "../../../utils/serviceError";

async function updateArtist(id: string, data: Partial<Artist>) {
  try {
    await setDoc(doc(artistsCollection, id), data, { merge: true });

    return {
      success: true,
    };
  } catch (e) {
    const error = e as FirebaseError;

    throw new ServiceError({
      service: ARTISTS,
      code: error.code ?? "unknown",
      message: error.message ?? "unknown",
    });
  }
}

export { updateArtist };
