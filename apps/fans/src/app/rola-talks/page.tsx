import { db } from "@rola/services/firebase";
import { RolaTalksPageUI } from "./ui";

async function RolaTalksPage() {
  const { episodes, totalEpisodes } = await db.podcast.getEpisodes({
    pageSize: 3,
  });

  return <RolaTalksPageUI episodes={episodes} totalEpisodes={totalEpisodes} />;
}

export default RolaTalksPage;
