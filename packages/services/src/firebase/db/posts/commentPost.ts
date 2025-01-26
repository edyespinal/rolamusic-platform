import { FirebaseError } from "firebase/app";
import { arrayUnion, setDoc } from "firebase/firestore";
import { artistPostCollectionDoc } from "../utils";
import { PostComment } from "../../../schemas";
import { ServiceError } from "../../../utils";
import { POSTS } from "../../../constants";

async function commentPost({
  user,
  artistId,
  postId,
  comment,
}: {
  user: {
    id: string;
    displayName: string;
    photoURL: string;
  };
  artistId: string;
  postId: string;
  comment: string;
}) {
  try {
    const postRef = artistPostCollectionDoc(artistId, postId);

    const newComment: PostComment = {
      id: crypto.randomUUID(),
      user,
      date: new Date(),
      content: comment,
      likes: 0,
      comments: [],
    };

    await setDoc(
      postRef,
      { comments: arrayUnion(newComment) },
      { merge: true }
    );

    return {
      success: true,
      data: newComment,
    };
  } catch (error) {
    const e = error as FirebaseError;

    throw new ServiceError({
      service: POSTS,
      code: e.code ?? "unknown",
      message: e.message ?? "unknown",
    });
  }
}

export { commentPost };
