import {
  FirestoreError,
  getDocs,
  limit,
  orderBy,
  query,
} from "firebase/firestore";
import { ServiceError } from "../../../utils/serviceError";
import { PODCAST } from "../../../constants";
import { podcastEpisodeCollection } from "../utils";

export async function getLatestEpisodes(pageSize = 3) {
  try {
    const episodesQuery = query(
      podcastEpisodeCollection,
      limit(pageSize),
      orderBy("number", "desc")
    );

    const episodesSnapshot = await getDocs(episodesQuery);

    if (episodesSnapshot.empty) {
      return { episodes: [] };
    }

    const episodes = episodesSnapshot.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });

    return { episodes };
  } catch (e) {
    const error = e as FirestoreError;

    throw new ServiceError({
      service: PODCAST,
      code: error.code,
      message: error.message,
    });
  }
}
