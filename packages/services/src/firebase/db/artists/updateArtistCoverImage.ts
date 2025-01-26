import { doc, FirestoreError, setDoc } from "firebase/firestore";
import { ServiceError } from "../../../utils/serviceError";
import { ARTISTS } from "../../../constants";
import { artistsCollection } from "../utils";

async function updateArtistCoverImage(id: string, imgUrl: string) {
  try {
    const ref = doc(artistsCollection, id);

    await setDoc(ref, { coverURL: imgUrl }, { merge: true });

    return {
      success: true,
      url: imgUrl,
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

export { updateArtistCoverImage };
