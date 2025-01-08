"use server";

import { db } from "@rola/services/firebase";
import { Artist } from "@rola/services/schemas";
import { ServiceError } from "@rola/services/utils";

async function updateArtist(artist: Artist, values: Partial<Artist>) {
  try {
    const res = await db.artists.updateArtist(artist.id, {
      name: values.name,
      email: values.email,
      genres: values.genres,
      year: values.year,
      location: {
        ...artist.location,
        state: values.location?.state ?? "",
      },
      bio: values.bio,
      members: values.members,
    });

    if (!res.success) {
      throw new Error("No se pudo actualizar el artista");
    }

    return {
      success: true,
      message: "Artista actualizado",
    };
  } catch (e) {
    const error = e as ServiceError;

    return {
      success: false,
      code: error.code,
      message: error.message,
    };
  }
}

export { updateArtist };
