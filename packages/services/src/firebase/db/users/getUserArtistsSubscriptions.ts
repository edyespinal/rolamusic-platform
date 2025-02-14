import { FirebaseError } from "firebase/app";
import { doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { artistsCollection, usersCollection } from "../utils";
import { Genre, ServiceError } from "../../../utils";
import { USERS } from "../../../constants";

async function getUserArtistsSubscriptions(userId: string) {
  try {
    const userRef = doc(usersCollection, userId);

    const userDoc = await getDoc(userRef);

    if (!userDoc.exists()) {
      throw new Error("User not found");
    }

    const supportedArtists = userDoc.data().supporting.map((artist) => ({
      id: artist.id,
      tier: artist.tier,
      active: artist.active,
      name: "",
      profileURL: "",
      genres: [] as Genre[],
    }));

    if (!supportedArtists.length) {
      return {
        success: true,
        data: [],
      };
    }

    for (const artist of supportedArtists) {
      const artistRef = doc(artistsCollection, artist.id);
      const artistDoc = await getDoc(artistRef);

      if (!artistDoc.exists()) {
        continue;
      }

      const artistData = {
        ...artistDoc.data(),
        id: artistDoc.id,
      };

      artist.name = artistData.name;
      artist.profileURL = artistData.profileURL ?? "";
      artist.genres = artistData.genres ?? [];
    }

    return {
      success: true,
      data: supportedArtists,
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

export { getUserArtistsSubscriptions };
