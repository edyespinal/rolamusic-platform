"use server";

import { currentUser } from "@clerk/nextjs/server";
import { ERROR_CODES } from "@rola/services/constants";
import { db } from "@rola/services/firebase";
import { ActionError, debounce } from "@rola/services/utils";

async function likePost({
  artistId,
  postId,
  liked,
}: {
  artistId: string;
  postId: string;
  liked: boolean;
}) {
  try {
    const user = await currentUser();

    if (!user) {
      throw new ActionError({
        code: ERROR_CODES.UNAUTHENTICATED,
        message: "Tienes que iniciar sesión para esta acción",
      });
    }

    const res = debounce(
      async () =>
        await db.posts.likePost({
          userId: user.id,
          artistId,
          postId,
          liked,
        }),
      2000
    );

    await res();
  } catch (error) {
    console.error(error);

    throw error;
  }
}

export { likePost };
