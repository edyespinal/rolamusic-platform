import { services } from "@rola/services/firebase";

async function activateArtist(id: string, active: boolean) {
  await services.activateArtist(id, active);
}

export { activateArtist };
