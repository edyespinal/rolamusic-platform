import { doc, getDoc } from "firebase/firestore";
import { artistPostsCollection } from "../utils";
import { FirebaseError } from "firebase/app";
import { ARTISTS } from "../../../constants";
import { ServiceError } from "../../../utils";

async function getArtistPost(artistId: string, postId: string) {
  try {
    const ref = doc(artistPostsCollection(artistId), postId);

    const postDoc = await getDoc(ref);

    if (!postDoc.exists()) {
      return {
        success: false,
        data: null,
      };
    }

    return {
      success: true,
      data: {
        ...postDoc.data(),
        id: postDoc.id,
      },
    };
  } catch (error) {
    const e = error as FirebaseError;

    throw new ServiceError({
      service: ARTISTS,
      code: e.code ?? "unknown",
      message: e.message ?? "unknown",
    });
  }
}

export { getArtistPost };
