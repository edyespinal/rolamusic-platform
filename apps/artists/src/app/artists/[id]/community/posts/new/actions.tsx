"use server";

import { currentUser } from "@clerk/nextjs/server";
import { db } from "@rola/services/firebase";
import { ArtistPost, artistPostSchema } from "@rola/services/schemas";

async function createArtistPost(artistId: string, post: ArtistPost) {
  const user = await currentUser();

  if (!user) {
    throw new Error("Tienes que iniciar sesión");
  }

  const result = artistPostSchema.omit({ id: true }).safeParse({
    ...post,
    likes: 0,
    comments: [],
  });

  if (!result.success) {
    console.log(JSON.stringify(result.error, null, 2));

    throw new Error("Los datos no son válidos");
  }

  return db.artists.createArtistPost(artistId, {
    ...result.data,
    id: crypto.randomUUID(),
  });
}

export { createArtistPost };
