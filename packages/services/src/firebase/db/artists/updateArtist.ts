import { setDoc, doc } from "firebase/firestore";
import { FirebaseError } from "firebase/app";
import { Artist } from "../../../schemas";
import { ARTISTS } from "../../../constants";
import { ServiceError } from "../../../utils/serviceError";
import { artistsCollection } from "../utils";

async function updateArtist(id: string, data: Partial<Artist>) {
  try {
    const ref = doc(artistsCollection, id);

    await setDoc(ref, data, { merge: true });

    return {
      success: true,
      data,
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
