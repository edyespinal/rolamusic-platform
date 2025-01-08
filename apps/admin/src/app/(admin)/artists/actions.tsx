"use server";

import { db } from "@rola/services/firebase";

async function activateArtist(
  id: string,
  tiersSetup: boolean,
  active: boolean
) {
  try {
    console.log({ active, tiersSetup });

    if (!active && !tiersSetup) {
      return {
        success: false,
        message: "No se han configurado los planes de suscripción",
      };
    }

    await db.artists.updateArtistActivation(id, !active);

    fetch(`${process.env.NEXT_PUBLIC_FANS_APP}/api/revalidate?tag=artists`);

    return {
      success: true,
      message: "Artista actualizado correctamente",
    };
  } catch (error: any) {
    console.error(error);

    return {
      success: false,
      message: `No se pudo ${active ? "desactivar" : "activar"} el artista`,
    };
  }
}

export { activateArtist };
