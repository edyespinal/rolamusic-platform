import { arrayUnion, doc, FirestoreError, getDoc } from "firebase/firestore";
import { ServiceError } from "../../../utils/serviceError";
import { USERS } from "../../../constants";
import {
  artistCommunityCollection,
  artistsCollection,
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
    const artistCommunityRef = artistCommunityCollection(artistId);

    const [artist, artistCommunity] = await Promise.all([
      getDoc(artistRef),
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
    const artistCommunityData = artistCommunity.data();

    if (!artistData || !artistCommunityData) {
      return {
        success: false,
        message: "No se encontró el artista",
        data: null,
      };
    }

    const test = artistCommunityData.subscriptions.tiers.find(
      ({ tier }) => tier.id === tierId
    );

    test?.subscribers.push(userId);

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

    batch.update(artistCommunityRef, {
      subscriptions: {
        total: artistCommunityData.subscriptions.total + 1,
        tiers: [...artistCommunityData.subscriptions.tiers],
      },
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
