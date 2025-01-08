import { db } from "@rola/services/firebase";
import { PodcastGuestsPageUI } from "./ui";

async function PodcastGuestsPage() {
  const guests = await db.podcast.getGuests();

  return <PodcastGuestsPageUI guests={guests} />;
}

export default PodcastGuestsPage;
