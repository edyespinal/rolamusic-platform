import {
  CollectionReference,
  DocumentData,
  collection,
  getFirestore,
  writeBatch,
} from "firebase/firestore";

import {
  ARTISTS,
  COMMUNITY_INFO,
  GUESTS,
  PAYMENT_DETAILS,
  USERS,
} from "../../constants";
import { Artist, ArtistCommunity, ArtistPayment } from "../../schemas";
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
const artistPaymentCollection = createSubCollection<ArtistPayment>(
  ARTISTS,
  PAYMENT_DETAILS
);
const guestsCollection = createCollection<Guest>(GUESTS);
const usersCollection = createCollection<User>(USERS);

const batch = writeBatch(db);

export {
  artistsCollection,
  artistCommunityCollection,
  artistPaymentCollection,
  guestsCollection,
  usersCollection,
  batch,
};
