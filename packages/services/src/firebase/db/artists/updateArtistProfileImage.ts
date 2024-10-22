import { setDoc, doc, FirestoreError } from "firebase/firestore";
import { artistsCollection } from "../db";
import { ServiceError } from "../../../utils/serviceError";
import { ARTISTS } from "../../../constants";

async function updateArtistProfileImage(id: string, imgUrl: string) {
  try {
    await setDoc(
      doc(artistsCollection, id),
      { profileURL: imgUrl },
      { merge: true }
    );

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

export { updateArtistProfileImage };
