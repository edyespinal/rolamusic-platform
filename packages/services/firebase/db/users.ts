import { doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { User } from "../../schemas/users";
import { artistsCollection, usersCollection } from "./db";
import { Artist } from "../../schemas";

async function getUsers(): Promise<User[]> {
  const usersDocs = await getDocs(usersCollection);

  if (usersDocs.empty) {
    throw new Error("Users not found");
  }

  const userData = usersDocs.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  return userData;
}

async function getUser(id: string): Promise<User> {
  const userDoc = await getDoc(doc(usersCollection, id));

  if (!userDoc.exists()) {
    throw new Error("User not found");
  }

  const userData = {
    ...userDoc.data(),
    id: userDoc.id,
  };

  return userData;
}

async function getUserArtists(userId: string): Promise<Artist[]> {
  const artistsQuery = query(artistsCollection, where("admin", "==", userId));
  const { docs } = await getDocs(artistsQuery);

  if (!docs.length) {
    return [];
  }

  const artists = docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  return artists;
}

export const usersServices = { getUsers, getUser, getUserArtists };
