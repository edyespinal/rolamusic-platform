import { collection, getDocs } from "firebase/firestore";
import { ARTISTS, SUBSCRIPTION_TIERS } from "../../../constants";
import { ServiceError } from "../../../utils/serviceError";
import { FirebaseError } from "firebase/app";
import { artistSubscriptionTiersCollection, db } from "../db";
import { ArtistSubscriptionTier } from "@/schemas";

async function getArtistSubscriptionTiers(
  artistId: string
): Promise<ArtistSubscriptionTier[] | null> {
  try {
    const ref = artistSubscriptionTiersCollection(artistId);

    const snapshot = await getDocs(ref);

    if (snapshot.empty) {
      return null;
    }

    return snapshot.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }))
      .sort((a, b) => a.prices.monthly.value - b.prices.monthly.value);
  } catch (e) {
    const error = e as FirebaseError;

    throw new ServiceError({
      service: ARTISTS,
      code: error.code ?? "unknown",
      message: error.message ?? "unknown",
    });
  }
}

export { getArtistSubscriptionTiers };
