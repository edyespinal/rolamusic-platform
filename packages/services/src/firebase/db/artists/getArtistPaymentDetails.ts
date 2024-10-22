import { getDoc, doc, FirestoreError } from "firebase/firestore";
import { ARTISTS } from "../../../constants";
import { ArtistPayment } from "../../../schemas/artist";
import { ServiceError } from "../../../utils/serviceError";
import { artistPaymentCollection } from "../db";

/**
 * Retrieves an artist payment details from the artist payment collection.
 *
 * @param {string} id - The id of the artist to retrieve.
 * @return {Promise<ArtistPayment | null>} A promise that resolves with the artist payment data,
 * or null if the artist payment is not found.
 * @throws {ServiceError} If the query fails.
 */
async function getArtistPaymentDetails(
  id: string
): Promise<ArtistPayment | null> {
  try {
    const paymentDoc = await getDoc(doc(artistPaymentCollection(id), id));

    if (!paymentDoc.exists()) {
      return null;
    }

    const paymentData = {
      ...paymentDoc.data(),
      id: paymentDoc.id,
    };

    return paymentData;
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
