import { setDoc, doc, FirestoreError } from "firebase/firestore";
import { ARTISTS } from "../../../constants";
import { Guest } from "../../../schemas/guest";
import { ServiceError } from "../../../utils/serviceError";
import { guestsCollection } from "../utils";

async function guestRequest(guest: Omit<Guest, "id">) {
  try {
    const ref = doc(guestsCollection);

    await setDoc(ref, guest);

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

export { guestRequest };
