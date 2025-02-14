import { db } from "@rola/services/firebase";

async function migrationsPageController() {
  const artists = await db.artists.getActiveArtists(50);

  if (!artists) {
    return [];
  }

  return artists;
}

export { migrationsPageController };
