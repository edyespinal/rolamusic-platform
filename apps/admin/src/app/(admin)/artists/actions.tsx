import { db } from "@rola/services/firebase";

async function activateArtist(id: string, active: boolean) {
  await db.artists.updateArtistActivation(id, active);
}

export { activateArtist };
