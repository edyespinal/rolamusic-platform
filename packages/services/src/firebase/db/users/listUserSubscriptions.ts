import { FirestoreError, getDocs } from "firebase/firestore";
import { userSubscriptionsCollection } from "../utils";
import { USERS } from "../../../constants";
import { ServiceError } from "../../../utils";

async function listUserSubscriptions(userId: string) {
  try {
    const ref = userSubscriptionsCollection(userId);

    const snapshot = await getDocs(ref);

    if (snapshot.empty) {
      return {
        success: true,
        data: [],
      };
    }

    return {
      success: true,
      data: snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
    };
  } catch (e) {
    const error = e as FirestoreError;

    throw new ServiceError({
      service: USERS,
      code: error.code ?? "unknown",
      message: error.message ?? "unknown",
    });
  }
}

export { listUserSubscriptions };
