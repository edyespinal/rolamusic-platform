import { setDoc, doc, FirestoreError } from "firebase/firestore";
import { ARTISTS } from "../../../constants";
import { PodcastEpisode } from "../../../schemas/podcast";
import { ServiceError } from "../../../utils/serviceError";
import { podcastEpisodeCollection } from "../utils";

async function addEpisode(episode: PodcastEpisode): Promise<PodcastEpisode> {
  try {
    const ref = doc(podcastEpisodeCollection, episode.id);

    await setDoc(ref, episode);

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
