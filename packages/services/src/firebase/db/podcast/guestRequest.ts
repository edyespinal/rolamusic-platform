import { setDoc, doc, FirestoreError } from "firebase/firestore";
import { ARTISTS } from "../../../constants";
import { Guest } from "../../../schemas/guest";
import { ServiceError } from "../../../utils/serviceError";
import { guestsCollection } from "../db";

/**
 * Submits a guest request to the guests collection.
 *
 * @param guest The guest request data, without an ID.
 * @return A promise that resolves with true if the request is successful.
 * @throws ServiceError if the request fails.
 */
async function guestRequest(guest: Omit<Guest, "id">) {
  try {
    await setDoc(doc(guestsCollection), guest);

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
