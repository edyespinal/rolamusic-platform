import { doc, arrayUnion, FirestoreError } from "firebase/firestore";
import { ARTISTS } from "../../../constants";
import { Artist } from "../../../schemas/artist";
import { RequiredFields } from "../../../utils/types";
import { ServiceError } from "../../../utils/serviceError";
import { artistsCollection, usersCollection } from "../utils";
import { batch } from "../db";

export async function createArtist(
  newArtist: RequiredFields<Omit<Artist, "id">> & { year: string }
): Promise<Artist> {
  try {
    const artistRef = doc(artistsCollection);
    const adminRef = doc(usersCollection, newArtist.admin);

    batch.set(artistRef, newArtist as Artist);
    batch.update(adminRef, {
      artists: arrayUnion({
        id: artistRef.id,
        name: newArtist.name,
        profileURL: "",
      }),
    });

    await batch.commit();

    return {
      ...newArtist,
      id: artistRef.id,
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
