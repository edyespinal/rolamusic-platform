import { FirebaseError } from "firebase/app";
import { doc, setDoc } from "firebase/firestore";
import { usersCollection } from "../utils";
import { USERS } from "../../../constants";
import { User } from "../../../schemas";
import { ServiceError } from "../../../utils";

async function updateUser(userId: string, data: Partial<User>) {
  try {
    const ref = doc(usersCollection, userId);

    await setDoc(ref, data, { merge: true });

    return {
      success: true,
      data: {
        message: "User updated successfully",
      },
    };
  } catch (e) {
    const error = e as FirebaseError;

    throw new ServiceError({
      service: USERS,
      code: error.code,
      message: error.message,
    });
  }
}

export { updateUser };
