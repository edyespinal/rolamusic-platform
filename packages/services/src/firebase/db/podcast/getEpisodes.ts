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

/**
 * Retrieves a list of podcast episodes from the podcast episodes collection.
 *
 * @param {{ pageSize?: number; page?: number; order?: "asc" | "desc"; start?: number; }} options
 *   The options object with the following properties:
 *   - `pageSize`: The number of episodes to retrieve. Defaults to 3.
 *   - `page`: The page number to retrieve. Defaults to 1.
 *   - `order`: The order of the episodes. Defaults to "desc".
 *   - `start`: The starting number of the episodes. Defaults to 0.
 * @return {Promise<{ episodes: PodcastEpisode[]; totalEpisodes: number }>}
 *   A promise that resolves with an object containing the episodes and the total count of episodes.
 * @throws {ServiceError} If the query fails.
 */
export async function getEpisodes({
  pageSize = 3,
  page = 1,
  order = "desc",
  start = 0,
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

    // eslint-disable-next-line no-console
    console.log({ totalEpisodes, pageSize, page, order, start });

    if (totalEpisodes === 0) {
      return { episodes: [], totalEpisodes };
    }

    const episodesQuery = query(
      podcastEpisodeCollection,
      limit(pageSize ? pageSize : totalEpisodes),
      orderBy("publishedAt", order),
      startAt(start ? start : totalEpisodes - 1 - pageSize * (page - 1))
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
