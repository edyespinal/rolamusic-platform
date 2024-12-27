import { ARTISTS } from "../../../constants";
import { User } from "../../../schemas/users";
import { ServiceError } from "../../../utils/serviceError";
import {
  doc,
  query,
  where,
  getDocs,
  setDoc,
  FirestoreError,
} from "firebase/firestore";
import { usersCollection, batch, artistsCollection } from "../db";

export async function createUser(newUser: User) {
  try {
    const userRef = doc(usersCollection, newUser.id);

    // ! TEMP: Migrate users to Clerk
    const userQuery = query(
      usersCollection,
      where("email", "==", newUser.email)
    );
    const { docs: usersDocs } = await getDocs(userQuery);

    if (!usersDocs[0]) {
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

      // ! TEMP: Create user with Clerk Id
    } else if (usersDocs[0]) {
      if (usersDocs[0].id.startsWith("user_")) {
        return {
          status: 200,
          message: "User already migrated",
        };
      }

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
  } catch (e) {
    const error = e as FirestoreError;

    throw new ServiceError({
      service: ARTISTS,
      code: error.code,
      message: error.message,
    });
  }
}
