import { db } from "@rola/services/firebase";
import { PodcastEpisode } from "@rola/services/schemas";

async function addNewEpisode(episode: PodcastEpisode) {
  try {
    await db.podcast.addEpisode(episode);

    return true;
  } catch (error) {
    return false;
  }
}

export { addNewEpisode };
