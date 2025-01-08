import { getDoc, doc, FirestoreError } from "firebase/firestore";
import { ARTISTS } from "../../../constants";
import { ServiceError } from "../../../utils/serviceError";
import { artistPaymentCollection } from "../db";
import { ArtistPayment } from "../../../schemas";

async function getArtistPaymentDetails(
  id: string
): Promise<ArtistPayment | null> {
  try {
    const ref = doc(artistPaymentCollection(id), id);
    const paymentDoc = await getDoc(ref);

    if (!paymentDoc.exists()) {
      return null;
    }

    return paymentDoc.data();
  } catch (e) {
    const error = e as FirestoreError;

    throw new ServiceError({
      service: ARTISTS,
      code: error.code,
      message: error.message,
    });
  }
}

export { getArtistPaymentDetails };
