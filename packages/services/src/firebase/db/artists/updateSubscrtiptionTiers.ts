import { FirebaseError } from "firebase/app";
import { doc, getDocs, setDoc } from "firebase/firestore";
import { ARTISTS } from "../../../constants";
import { ServiceError } from "../../../utils/serviceError";
import { subscriptionTiersCollection } from "../utils";
import { batch } from "../db";

async function updateArtistSubscriptionTiers(artistId: string) {
  try {
    const collectionRef = subscriptionTiersCollection(artistId);
    const tiers = await getDocs(collectionRef);

    if (tiers.empty) {
      return {
        success: false,
        data: {
          message: "No se encontraron planes de suscripción",
        },
      };
    }

    const tiersOrderedByPrice = tiers.docs
      .map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      })
      .sort((a, b) => a.prices.monthly.value - b.prices.monthly.value);

    const promises = [];

    for (let i = 0; i < tiersOrderedByPrice.length; i++) {
      promises.push(
        setDoc(
          doc(collectionRef, tiersOrderedByPrice[i]?.id),
          { access: i + 1 },
          { merge: true }
        )
      );
    }

    await Promise.all(promises);

    return {
      success: true,
      data: {
        message: "Planes de suscripción actualizados correctamente",
      },
    };
  } catch (e) {
    const error = e as FirebaseError;

    throw new ServiceError({
      service: ARTISTS,
      code: error.code ?? "unknown",
      message: error.message ?? "unknown",
    });
  }
}

export { updateArtistSubscriptionTiers };
