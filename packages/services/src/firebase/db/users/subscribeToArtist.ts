import {
  arrayUnion,
  doc,
  FirestoreError,
  getDoc,
  setDoc,
} from "firebase/firestore";
import {
  artistCommunityCollection,
  artistsCollection,
  usersCollection,
} from "../db";
import { ServiceError } from "../../../utils/serviceError";
import { USERS } from "../../../constants";

export async function subscribeToArtist(
  userId: string,
  artistId: string,
  tier: string
) {
  try {
    const userRef = doc(usersCollection, userId);
    const user = await getDoc(userRef);

    if (!user.exists()) {
      throw new Error("User not found");
    }

    const userData = user.data();
    const isSupporting = userData.supporting.find(
      (artist) => artist.id === artistId
    );

    if (isSupporting) {
      return {
        success: true,
        message: "You are already supporting this artist",
        data: {
          supporting: userData.supporting.filter(
            (artist) => artist.id !== artistId
          ),
        },
      };
    }

    const artistRef = doc(artistsCollection, artistId);
    const artistCommunityRef = doc(
      artistCommunityCollection(artistId),
      artistId
    );

    const [artist, artistCommunity] = await Promise.all([
      getDoc(artistRef),
      getDoc(artistCommunityRef),
    ]);

    if (!artist.exists()) {
      return;
    }

    const artistData = artist.data();
    const artistCommunityData = {
      ...artistCommunity.data(),
      subscriptions: {
        ...(artistCommunity.data()?.subscriptions || {
          total: 0,
          tiers: {},
        }),
      },
    };

    await Promise.all([
      setDoc(
        userRef,
        {
          supporting: arrayUnion({
            id: artist.id,
            name: artistData.name,
            profileURL: artistData.profileURL,
            genres: artistData.genres,
          }),
        },
        { merge: true }
      ),
      setDoc(
        artistRef,
        {
          fansSummary: {
            total: artistCommunityData.subscriptions.total + 1,
          },
        },
        { merge: true }
      ),
      setDoc(
        artistCommunityRef,
        {
          subscriptions: {
            total: artistCommunityData.subscriptions.total + 1,
            tiers: {
              [tier]: {
                subscribers: arrayUnion(userId),
              },
            },
          },
        },
        { merge: true }
      ),
    ]);

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
