import { getDoc, FirestoreError } from "firebase/firestore";
import { ARTISTS } from "../../../constants";
import { ServiceError } from "../../../utils/serviceError";
import { ArtistPayment } from "../../../schemas";
import { artistPaymentCollection } from "../utils";

async function getArtistPaymentDetails(
  artistId: string
): Promise<ArtistPayment | null> {
  try {
    const ref = artistPaymentCollection(artistId);
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
