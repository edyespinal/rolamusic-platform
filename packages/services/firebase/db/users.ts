import { doc, getDoc, getDocs } from "firebase/firestore";
import { User } from "../../schemas/users";
import { usersCollection } from "./db";

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

export const usersServices = { getUsers, getUser };
