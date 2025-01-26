import { doc, FirestoreError, setDoc } from "firebase/firestore";
import { ARTISTS } from "../../../constants";
import { ServiceError } from "../../../utils/serviceError";
import { artistsCollection } from "../utils";

async function updateArtistActivation(id: string, active: boolean) {
  try {
    const ref = doc(artistsCollection, id);

    await setDoc(ref, { active }, { merge: true });

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
