import { query, limit, getDocs, FirestoreError } from "firebase/firestore";
import { ARTISTS } from "../../../constants";
import { Artist } from "../../../schemas/artist";
import { ServiceError } from "../../../utils/serviceError";
import { artistsCollection } from "../db";

export async function getArtists(pageSize = 10): Promise<Artist[]> {
  try {
    const artistsQuery = query(artistsCollection, limit(pageSize));
    const artistsDocs = await getDocs(artistsQuery);

    if (artistsDocs.empty) {
      return [];
    }

    const artistData = artistsDocs.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });

    return artistData;
  } catch (e) {
    const error = e as FirestoreError;

    throw new ServiceError({
      service: ARTISTS,
      code: error.code,
      message: error.message,
    });
  }
}
