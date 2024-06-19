import {
  CollectionReference,
  DocumentData,
  collection,
  getFirestore,
  writeBatch,
} from "firebase/firestore";

import { ARTISTS, COMMUNITY_INFO, GUESTS, USERS } from "../../constants";
import { Artist, ArtistCommunity } from "../../schemas";
import { Guest } from "../../schemas/guest";
import { User } from "../../schemas/users";
import { app } from "../app";

export const db = getFirestore(app);

function createCollection<T = DocumentData>(collectionName: string) {
  return collection(db, collectionName) as CollectionReference<T>;
}

function createSubCollection<T = DocumentData>(
  collectionName: string,
  subCollectionName: string
) {
  return (id: string) =>
    collection(
      db,
      collectionName,
      id,
      subCollectionName
    ) as CollectionReference<T>;
}

const artistsCollection = createCollection<Artist>(ARTISTS);
const artistCommunityCollection = createSubCollection<ArtistCommunity>(
  ARTISTS,
  COMMUNITY_INFO
);
const guestsCollection = createCollection<Guest>(GUESTS);
const usersCollection = createCollection<User>(USERS);

const batch = writeBatch(db);

export {
  artistsCollection,
  artistCommunityCollection,
  guestsCollection,
  usersCollection,
  batch,
};
