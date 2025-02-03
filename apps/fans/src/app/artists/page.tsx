import { db } from "@rola/services/firebase";
import { ArtistsPageUI } from "./ui";
import { redirect } from "next/navigation";
import { unstable_cache } from "next/cache";
import { currentUser } from "@clerk/nextjs/server";
import { User } from "@rola/services/schemas";

const getCachedArtists = unstable_cache(
  async () => db.artists.getActiveArtists(50),
  ["artists"],
  {
    revalidate: false,
    tags: ["artists"],
  }
);

async function ArtistsPage() {
  let userInfo: User | null = null;
  const artists = await getCachedArtists();
  const user = await currentUser();

  if (user?.id) {
    userInfo = await db.users.getUser(user.id);
  }

  if (!artists) {
    redirect("/404");
  }

  const supporting = userInfo?.supporting.filter((s) => s.active);

  return <ArtistsPageUI artists={artists} supporting={supporting ?? null} />;
}

export default ArtistsPage;
