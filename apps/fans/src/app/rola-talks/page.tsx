import { db } from "@rola/services/firebase";
import { RolaTalksPageUI } from "./ui";
import { unstable_cache } from "next/cache";

const getCachedEpisodes = unstable_cache(
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
