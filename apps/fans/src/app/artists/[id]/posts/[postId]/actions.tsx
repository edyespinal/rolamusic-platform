"use server";

import { currentUser } from "@clerk/nextjs/server";
import { ERROR_CODES } from "@rola/services/constants";
import { db } from "@rola/services/firebase";
import { postCommentSchema } from "@rola/services/schemas";
import { ActionError } from "@rola/services/utils";

async function submitComment({
  artistId,
  postId,
  comment,
}: {
  artistId: string;
  postId: string;
  comment: string;
}) {
  const user = await currentUser();

  if (!user) {
    throw new ActionError({
      code: ERROR_CODES.UNAUTHENTICATED,
      message: "Tienes que iniciar sesión para esta acción",
    });
  }

  const result = postCommentSchema.pick({ content: true }).safeParse({
    comment,
  });

  if (!result.success) {
    throw new ActionError({
      code: ERROR_CODES.BAD_REQUEST,
      message: "El comentario no es valido",
    });
  }

  const newComment = await db.posts.commentPost({
    artistId,
    postId,
    user: {
      id: user.id,
      displayName: user.fullName ?? user.firstName ?? user.username ?? "",
      photoURL: user.hasImage ? user.imageUrl : "",
    },
    comment,
  });

  return newComment;
}

export { submitComment };
