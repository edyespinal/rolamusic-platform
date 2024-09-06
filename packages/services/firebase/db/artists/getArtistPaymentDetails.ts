import { doc, getDoc } from "firebase/firestore";
import { ArtistPayment } from "@schemas/artist";
import { artistPaymentCollection } from "../db";

/**
 * Retrieves an artist payment by its ID from the artist payments collection.
 *
 * @param {string} id - The ID of the artist payment to retrieve.
 * @return {Promise<ArtistPayment>} A Promise that resolves with the artist payment data, including the ID.
 * @throws {Error} If the artist payment with the given ID is not found.
 */
async function getArtistPaymentDetails(id: string): Promise<ArtistPayment> {
  const paymentDoc = await getDoc(doc(artistPaymentCollection(id), id));

  if (!paymentDoc.exists()) {
    throw new Error("Payment not found");
  }

  const paymentData = {
    ...paymentDoc.data(),
    id: paymentDoc.id,
  };

  return paymentData;
}

export { getArtistPaymentDetails };
