import { doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { artistsCollection, batch, usersCollection } from "../db";
import { User } from "../../../schemas";

export async function createUser(newUser: User) {
  const userRef = doc(usersCollection, newUser.id);

  // ! TEMP: Migrate users to Clerk
  const userQuery = query(usersCollection, where("email", "==", newUser.email));
  const { docs: usersDocs } = await getDocs(userQuery);

  if (!usersDocs.length) {
    await setDoc(
      userRef,
      {
        id: newUser.id,
        email: newUser.email,
        displayName: newUser.displayName,
        photoURL: newUser.photoURL,
        artists: [],
        supporting: [],
        genres: [],
      },
      { merge: true }
    );

    return {
      status: 201,
      message: "User created",
    };
  }

  // ! TEMP: Create user with Clerk Id
  if (usersDocs.length > 0 && usersDocs[0]) {
    const existingData = {
      ...usersDocs[0].data(),
      id: usersDocs[0].id,
    };

    const updatedData: User = {
      ...existingData,
      artists:
        existingData.artists?.map((artist) => ({
          ...artist,
          admin: newUser.id,
        })) || [],
      supporting: existingData.supporting || [],
      genres: existingData.genres || [],
    };

    batch.set(userRef, updatedData, { merge: true });
    batch.delete(doc(usersCollection, existingData.id));

    // ! TEMP: Update artists' admin with new user Id
    const artistsQuery = query(
      artistsCollection,
      where("admin", "==", existingData.id)
    );
    const { docs: artistsDocs } = await getDocs(artistsQuery);

    artistsDocs.forEach((artist) => {
      const artistRef = doc(artistsCollection, artist.id);
      batch.update(artistRef, { admin: newUser.id });
    });

    await batch.commit();

    return {
      status: 200,
      message: "User migrated",
    };
  }
}
