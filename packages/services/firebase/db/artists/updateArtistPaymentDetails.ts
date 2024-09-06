import { ArtistPayment } from "@schemas/artist";
import { doc, setDoc } from "firebase/firestore";
import { artistPaymentCollection } from "../db";

async function updateArtistPaymentDetails(
  id: string,
  data: Partial<ArtistPayment>
) {
  try {
    await setDoc(doc(artistPaymentCollection(id), id), data, { merge: true });

    return true;
  } catch (error) {
    throw new Error("Error updating artist payment details");
  }
}

export { updateArtistPaymentDetails };
