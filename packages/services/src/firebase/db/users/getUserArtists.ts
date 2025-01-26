import { query, where, getDocs, FirestoreError } from "firebase/firestore";
import { artistsCollection } from "../utils";
import { ARTISTS } from "../../../constants";
import { ServiceError } from "../../../utils";

async function getUserArtists(userId: string) {
  try {
    const artistsQuery = query(artistsCollection, where("admin", "==", userId));
    const { docs } = await getDocs(artistsQuery);

    if (!docs.length) {
      return [];
    }

    const artists = docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });

    return artists;
  } catch (e) {
    const error = e as FirestoreError;

    throw new ServiceError({
      service: ARTISTS,
      code: error.code,
      message: error.message,
    });
  }
}

export { getUserArtists };
