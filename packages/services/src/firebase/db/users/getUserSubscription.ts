import { FirebaseError } from "firebase/app";
import { getDoc } from "firebase/firestore";
import { userSubscriptionsCollectionDoc } from "../utils";
import { USERS } from "../../../constants";
import { ServiceError } from "../../../utils";

async function getUserSubscription(userId: string, subscriptionId: string) {
  try {
    const ref = userSubscriptionsCollectionDoc(userId, subscriptionId);

    const doc = await getDoc(ref);

    if (!doc.exists()) {
      return {
        success: false,
        data: null,
      };
    }

    return {
      success: true,
      data: {
        ...doc.data(),
        id: doc.id,
      },
    };
  } catch (e) {
    const error = e as FirebaseError;

    throw new ServiceError({
      service: USERS,
      code: error.code ?? "unknown",
      message: error.message ?? "unknown",
    });
  }
}

export { getUserSubscription };
