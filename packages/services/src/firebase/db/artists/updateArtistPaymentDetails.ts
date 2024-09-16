import { ARTISTS } from "../../../constants";
import { ArtistPayment } from "../../../schemas/artist";
import { ServiceError } from "../../../utils/serviceError";
import { setDoc, doc, FirestoreError } from "firebase/firestore";
import { artistPaymentCollection } from "../db";

/**
 * Updates an artist payment details in the artist payment collection.
 *
 * @param {string} id - The ID of the artist to update.
 * @param {Partial<ArtistPayment>} data - The data to update the artist payment with.
 * @return {Promise<boolean>} A Promise that resolves with a boolean indicating if the update was successful.
 * @throws {ServiceError} If the update fails.
 */
async function updateArtistPaymentDetails(
  id: string,
  data: Partial<ArtistPayment>
) {
  try {
    await setDoc(doc(artistPaymentCollection(id), id), data, { merge: true });

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
