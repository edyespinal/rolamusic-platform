import { ARTISTS } from "../../../constants";
import { ArtistPayment } from "../../../schemas/artist";
import { ServiceError } from "../../../utils/serviceError";
import { setDoc, doc, FirestoreError } from "firebase/firestore";
import { artistPaymentCollection } from "../utils";

async function updateArtistPaymentDetails(
  artistId: string,
  data: Partial<ArtistPayment>
) {
  try {
    const ref = artistPaymentCollection(artistId);

    await setDoc(ref, data, { merge: true });

    return true;
  } catch (e) {
    const error = e as FirestoreError;

    throw new ServiceError({
      service: ARTISTS,
      code: error.code,
      message: error.message,
    });
  }
}

export { updateArtistPaymentDetails };
