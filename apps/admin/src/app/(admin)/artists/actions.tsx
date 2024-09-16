import { db } from "@rola/services/firebase";

async function activateArtist(id: string, active: boolean) {
  await db.artists.activateArtist(id, active);
}

export { activateArtist };
