import { db } from "@rola/services/firebase";
import { RolaTalksPageUI } from "./ui";

async function RolaTalksPage() {
  const { episodes } = await db.podcast.getLatestEpisodes();

  return <RolaTalksPageUI episodes={episodes} />;
}

export default RolaTalksPage;
