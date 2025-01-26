import { addDoc, FirestoreError, setDoc } from "firebase/firestore";
import { ServiceError } from "../../../utils/serviceError";
import { ARTISTS } from "../../../constants";
import { ArtistPost } from "../../../schemas";
import { artistPostCollectionDoc } from "../utils";

async function createArtistPost(artistId: string, post: ArtistPost) {
  try {
    const ref = artistPostCollectionDoc(artistId, post.id);

    const newPost = await setDoc(ref, post);

    return {
      success: true,
      data: newPost,
    };
  } catch (e) {
    const error = e as FirestoreError;

    throw new ServiceError({
      service: ARTISTS,
      code: error.code,
      message: error.message,
    });
  }
}

export { createArtistPost };
