import { arrayUnion, doc, DocumentReference, setDoc } from "firebase/firestore";
import { Artist, User } from "../../../schemas";
import { artistsCollection, batch, usersCollection } from "../db";
import { RequiredFields } from "../../../utils";

export async function createArtist(
  newArtist: RequiredFields<Omit<Artist, "id">> & { year: string }
): Promise<Artist> {
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
}
