import { arrayUnion, doc, FirestoreError, getDoc } from "firebase/firestore";
import { ServiceError } from "../../../utils/serviceError";
import { USERS } from "../../../constants";
import {
  artistCommunityCollection,
  artistsCollection,
  subscriptionTiersCollection,
  usersCollection,
} from "../utils";
import { batch } from "../db";

export async function subscribeToArtist(
  userId: string,
  artistId: string,
  tierId: string
) {
  try {
    const userRef = doc(usersCollection, userId);
    const user = await getDoc(userRef);

    if (!user.exists()) {
      return {
        success: false,
        message: "No se encontró el usuario",
        data: null,
      };
    }

    const userData = user.data();

    const isSupporting = userData.supporting.find(
      (artist) => artist.id === artistId
    );

    if (isSupporting?.active) {
      return {
        success: false,
        message: "Ya estás suscrito a este artista",
        data: {
          supporting: userData.supporting,
        },
      };
    }

    const artistRef = doc(artistsCollection, artistId);
    const subscriptionTierRef = doc(
      subscriptionTiersCollection(artistId),
      tierId
    );
    const artistCommunityRef = artistCommunityCollection(artistId);

    const [artist, subscriptionTier, artistCommunity] = await Promise.all([
      getDoc(artistRef),
      getDoc(subscriptionTierRef),
      getDoc(artistCommunityRef),
    ]);

    if (!artist.exists()) {
      return {
        success: false,
        message: "No se encontró el artista",
        data: null,
      };
    }

    const artistData = artist.data();
    const subscriptionTierData = subscriptionTier.data();
    const artistCommunityData = artistCommunity.data();

    if (!artistData || !subscriptionTierData || !artistCommunityData) {
      return {
        success: false,
        message: "No se encontró el artista",
        data: null,
      };
    }

    batch.update(userRef, {
      supporting: arrayUnion({
        id: artist.id,
        name: artistData.name,
        profileURL: artistData.profileURL,
        genres: artistData.genres,
        tier: tierId,
        active: true,
      }),
    });

    batch.update(artistRef, {
      fansSummary: {
        total: artistData.fansSummary?.total
          ? artistData.fansSummary.total + 1
          : 1,
      },
    });

    batch.update(subscriptionTierRef, {
      subscribers: arrayUnion(userId),
    });

    batch.update(artistCommunityRef, {
      totalSubscribers: artistCommunityData.totalSubscribers + 1,
    });

    await batch.commit();

    return {
      success: true,
      message: `Successfully subscribed to artist ${artistData.name}`,
      data: {
        artist,
        artistCommunity,
      },
    };
  } catch (e) {
    const error = e as FirestoreError;

    throw new ServiceError({
      service: USERS,
      code: error.code,
      message: error.message,
    });
  }
}
