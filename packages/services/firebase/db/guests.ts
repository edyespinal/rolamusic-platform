import { getDocs } from "firebase/firestore";
import { guestsCollection } from "./db";
import { Guest } from "../../schemas/guest";

async function getGuests(): Promise<Guest[]> {
  const guestsDocs = await getDocs(guestsCollection);

  if (guestsDocs.empty) {
    throw new Error("Guests not found");
  }

  const guestData = guestsDocs.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  return guestData;
}

export const guestsServices = {
  getGuests,
};
