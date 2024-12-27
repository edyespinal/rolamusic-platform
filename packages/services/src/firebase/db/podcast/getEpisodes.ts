import { PODCAST } from "../../../constants";
import { PodcastEpisode } from "../../../schemas/podcast";
import { ServiceError } from "../../../utils/serviceError";
import {
  getCountFromServer,
  query,
  limit,
  orderBy,
  startAt,
  getDocs,
  FirestoreError,
} from "firebase/firestore";
import { podcastEpisodeCollection } from "../db";

export async function getEpisodes({
  pageSize = 3,
  page = 1,
  order = "desc",
  start = 1,
}: {
  pageSize?: number;
  page?: number;
  order?: "asc" | "desc";
  start?: number;
}): Promise<{ episodes: PodcastEpisode[]; totalEpisodes: number }> {
  try {
    const totalEpisodesSnapshot = await getCountFromServer(
      podcastEpisodeCollection
    );
    const totalEpisodes = totalEpisodesSnapshot.data().count;

    if (totalEpisodes === 0) {
      return { episodes: [], totalEpisodes };
    }

    const episodesQuery = query(
      podcastEpisodeCollection,
      limit(pageSize),
      orderBy("number", order)
    );
    const episodesDocs = await getDocs(episodesQuery);

    if (episodesDocs.empty) {
      return { episodes: [], totalEpisodes };
    }

    const episodeData = episodesDocs.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });

    return { episodes: episodeData, totalEpisodes };
  } catch (e) {
    const error = e as FirestoreError;

    throw new ServiceError({
      service: PODCAST,
      code: error.code,
      message: error.message,
    });
  }
}
