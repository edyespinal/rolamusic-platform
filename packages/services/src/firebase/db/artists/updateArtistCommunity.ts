import { setDoc, FirestoreError } from "firebase/firestore";
import { ARTISTS } from "../../../constants";
import { ArtistCommunity } from "../../../schemas/artist";
import { ServiceError } from "../../../utils/serviceError";
import { artistCommunityCollection } from "../utils";

async function updateArtistCommunity(
  artistId: string,
  data: Partial<ArtistCommunity>,
  merge = true
) {
  try {
    const ref = artistCommunityCollection(artistId);

    await setDoc(ref, data, { merge });

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
