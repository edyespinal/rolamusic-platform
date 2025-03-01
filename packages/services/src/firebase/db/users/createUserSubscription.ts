import { FirebaseError } from "firebase/app";
import { addDoc, doc, setDoc } from "firebase/firestore";
import { userSubscriptionsCollectionDoc } from "../utils";
import { UserSubscription } from "../../../schemas";
import { ServiceError } from "../../../utils";
import { USERS } from "../../../constants";

async function createUserSubscription(
  userId: string,
  payload: UserSubscription
) {
  try {
    const ref = userSubscriptionsCollectionDoc(userId, payload.id);

    const newSubscription = await setDoc(ref, payload);

    return {
      success: true,
      data: newSubscription,
    };
  } catch (e) {
    const error = e as FirebaseError;

    throw new ServiceError({
      service: USERS,
      code: error.code ?? "unknown",
      message: error.message,
    });
  }
}

export { createUserSubscription };
