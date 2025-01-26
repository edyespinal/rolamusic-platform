import { FirebaseError } from "firebase/app";
import { arrayRemove, arrayUnion, setDoc } from "firebase/firestore";
import { artistPostCollectionDoc } from "../utils";
import { POSTS } from "../../../constants";
import { ServiceError } from "../../../utils";

async function likePost({
  userId,
  artistId,
  postId,
  liked,
}: {
  userId: string;
  artistId: string;
  postId: string;
  liked: boolean;
}) {
  try {
    const postRef = artistPostCollectionDoc(artistId, postId);

    if (liked) {
      await setDoc(postRef, { likes: arrayUnion(userId) }, { merge: true });

      return {
        success: true,
        data: "Post like added",
      };
    }

    await setDoc(postRef, { likes: arrayRemove(userId) }, { merge: true });

    return {
      success: true,
      data: "Post like removed",
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

export { likePost };
