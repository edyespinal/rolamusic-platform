import { doc, FirestoreError, setDoc } from "firebase/firestore";
import { artistsCollection } from "../db";
import { ARTISTS } from "../../../constants";
import { ServiceError } from "../../../utils/serviceError";

async function updateArtistActivation(id: string, active: boolean) {
  try {
    await setDoc(doc(artistsCollection, id), { active }, { merge: true });

    return {
      success: true,
      active,
    };
  } catch (e) {
    const error = e as FirestoreError;

    throw new ServiceError({
      service: ARTISTS,
      code: error.code,
      message: error.message,
    });
  }
}

export { updateArtistActivation };
