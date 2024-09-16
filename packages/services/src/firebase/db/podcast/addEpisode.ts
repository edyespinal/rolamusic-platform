import { setDoc, doc, FirestoreError } from "firebase/firestore";
import { ARTISTS } from "../../../constants";
import { PodcastEpisode } from "../../../schemas/podcast";
import { ServiceError } from "../../../utils/serviceError";
import { podcastEpisodeCollection } from "../db";

/**
 * Adds a podcast episode to the podcast episodes collection.
 *
 * @param episode The episode to add.
 * @returns A promise that resolves with the added episode.
 * @throws ServiceError if the episode could not be added.
 */
async function addEpisode(episode: PodcastEpisode): Promise<PodcastEpisode> {
  try {
    await setDoc(doc(podcastEpisodeCollection, episode.id), episode);

    return episode;
  } catch (e) {
    const error = e as FirestoreError;

    throw new ServiceError({
      service: ARTISTS,
      code: error.code,
      message: error.message,
    });
  }
}

export { addEpisode };
