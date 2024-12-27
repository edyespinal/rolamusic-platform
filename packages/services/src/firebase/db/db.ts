import {
  getFirestore,
  DocumentData,
  collection,
  CollectionReference,
  writeBatch,
} from "firebase/firestore";
import {
  ARTISTS,
  COMMUNITY_INFO,
  PAYMENT_DETAILS,
  GUESTS,
  USERS,
  PODCAST_EPISODES,
  SUBSCRIPTION_TIERS,
} from "../../constants";
import {
  Artist,
  ArtistCommunity,
  ArtistPayment,
  Guest,
  User,
  PodcastEpisode,
  ArtistSubscriptionTier,
} from "../../schemas";
import { app } from "../app";

const db = getFirestore(app);

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
const artistSubscriptionTiersCollection =
  createSubCollection<ArtistSubscriptionTier>(ARTISTS, SUBSCRIPTION_TIERS);

const guestsCollection = createCollection<Guest>(GUESTS);
const usersCollection = createCollection<User>(USERS);
const podcastEpisodeCollection =
  createCollection<PodcastEpisode>(PODCAST_EPISODES);

const batch = writeBatch(db);

export {
  db,
  artistsCollection,
  artistCommunityCollection,
  artistPaymentCollection,
  artistSubscriptionTiersCollection,
  guestsCollection,
  podcastEpisodeCollection,
  usersCollection,
  batch,
};
