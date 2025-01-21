import { arrayUnion, doc, FirestoreError, setDoc } from "firebase/firestore";
import { ServiceError } from "../../../utils/serviceError";
import { ARTISTS, COMMUNITY_INFO } from "../../../constants";
import { db } from "../db";
import { ArtistPost } from "@/schemas";

async function createArtistPost(artistId: string, post: ArtistPost) {
  try {
    const ref = doc(db, ARTISTS, artistId, COMMUNITY_INFO, artistId);

    await setDoc(
      ref,
      {
        posts: arrayUnion(post),
      },
      {
        merge: true,
      }
    );

    return {
      success: true,
      data: post,
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
