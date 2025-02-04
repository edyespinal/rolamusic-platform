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

    const posts = postDocs.docs
      .map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      })
      .sort((a, b) => {
        if (typeof a.date === "object" && typeof b.date === "object") {
          const aDate = a.date as { seconds: number };
          const bDate = b.date as { seconds: number };

          return bDate.seconds - aDate.seconds;
        }

        return 0;
      });

    return {
      success: true,
      data: posts,
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
