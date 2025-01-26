import { getDocs } from "firebase/firestore";
import { artistPostsCollection } from "../utils";
import { FirebaseError } from "firebase/app";
import { ARTISTS } from "../../../constants";
import { ServiceError } from "../../../utils";

async function getArtistPosts(artistId: string) {
  try {
    const ref = artistPostsCollection(artistId);

    const postDocs = await getDocs(ref);

    if (postDocs.empty) {
      return {
        success: true,
        data: [],
      };
    }

    return {
      success: true,
      data: postDocs.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      }),
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

export { getArtistPosts };
