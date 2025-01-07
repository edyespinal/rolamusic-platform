import { setDoc, doc, FirestoreError } from "firebase/firestore";
import { ARTISTS } from "../../../constants";
import { ArtistCommunity } from "../../../schemas/artist";
import { ServiceError } from "../../../utils/serviceError";
import { artistCommunityCollection } from "../db";

async function updateArtistCommunity(
  id: string,
  data: Partial<ArtistCommunity>
) {
  try {
    await setDoc(doc(artistCommunityCollection(id), id), data, { merge: true });

    return {
      success: true,
      data,
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

export { updateArtistCommunity };
