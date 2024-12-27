"use server";

import { db } from "@rola/services/firebase";

async function activateArtist(
  id: string,
  tiersSetup: boolean,
  active: boolean
) {
  if (!tiersSetup) {
    return {
      success: false,
      message: "No se han configurado los planes de suscripción",
    };
  }

  await db.artists.updateArtistActivation(id, active);

  return {
    success: true,
    message: "Artista actualizado correctamente",
  };
}

export { activateArtist };
