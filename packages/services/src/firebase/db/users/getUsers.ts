import { FirestoreError, getDocs } from "firebase/firestore";
import { usersCollection } from "../utils";
import { ARTISTS } from "../../../constants";
import { ServiceError } from "../../../utils";

async function getUsers() {
  try {
    const usersDocs = await getDocs(usersCollection);

    if (usersDocs.empty) {
      throw new Error("Users not found");
    }

    const userData = usersDocs.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });

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

export { getUsers };
