import { getDocs, FirestoreError } from "firebase/firestore";
import { ARTISTS } from "../../../constants";
import { Guest } from "../../../schemas/guest";
import { ServiceError } from "../../../utils/serviceError";
import { guestsCollection } from "../db";

async function getGuests(): Promise<Guest[]> {
  try {
    const guestsDocs = await getDocs(guestsCollection);

    if (guestsDocs.empty) {
      return [];
    }

    const guestData = guestsDocs.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });

    return guestData;
  } catch (e) {
    const error = e as FirestoreError;

    throw new ServiceError({
      service: ARTISTS,
      code: error.code,
      message: error.message,
    });
  }
}

export { getGuests };
