import { getDoc, doc, FirestoreError } from "firebase/firestore";
import { ARTISTS } from "../../../constants";
import { ServiceError } from "../../../utils";
import { usersCollection } from "../utils";

async function getUser(id: string) {
  try {
    const userDoc = await getDoc(doc(usersCollection, id));

    if (!userDoc.exists()) {
      throw new Error("User not found");
    }

    const userData = {
      ...userDoc.data(),
      id: userDoc.id,
    };

    return userData;
  } catch (e) {
    const error = e as FirestoreError;

    throw new ServiceError({
      service: ARTISTS,
      code: error.code,
      message: error.message,
    });
  }
}

export { getUser };
