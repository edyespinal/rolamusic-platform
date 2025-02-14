import { db } from "@rola/services/firebase";
import { RolaTalksPageUI } from "./ui";
import { unstable_cache as unstableCache } from "next/cache";

const getCachedEpisodes = unstableCache(
  async () => db.podcast.getLatestEpisodes(),
  ["podcast-latest-episodes"],
  {
    revalidate: false,
    tags: ["podcast-latest-episodes"],
  }
);

async function RolaTalksPage() {
  const { episodes } = await getCachedEpisodes();

  return <RolaTalksPageUI episodes={episodes} />;
}

export default RolaTalksPage;
