"use server";

import { db } from "@rola/services/firebase";

async function activateArtist(
  id: string,
  tiersSetup: boolean,
  active: boolean
) {
  try {
    if (!tiersSetup) {
      return {
        success: false,
        message: "No se han configurado los planes de suscripción",
      };
    }

    const res = await db.artists.updateArtistActivation(id, active);

    if (!res.success) {
      throw new Error(
        `No se pudo ${!active ? "activar" : "desactivar"} el artista`
      );
    }

    fetch(`${process.env.NEXT_PUBLIC_FANS_APP}/api/revalidate?tag=artists`);

    return {
      success: true,
      message: "Artista actualizado correctamente",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "No se pudo actualizar el artista",
    };
  }
}

export { activateArtist };
