import {
  collection,
  CollectionReference,
  doc,
  DocumentData,
  DocumentReference,
} from "firebase/firestore";
import { db } from "./db";
import {
  Artist,
  ArtistCommunity,
  ArtistPayment,
  ArtistPost,
  ArtistSubscriptionTier,
  Guest,
  PodcastEpisode,
  User,
} from "../../schemas";
import {
  ARTIST_POSTS,
  ARTISTS,
  COMMUNITY_INFO,
  GUESTS,
  PAYMENT_DETAILS,
  PODCAST_EPISODES,
  SUBSCRIPTION_TIERS,
  USER_INTERACTIONS,
  USER_SUBSCRIPTIONS,
  USERS,
} from "../../constants";
import { UserInteractions, UserSubscription } from "../../schemas/user";

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

function createSubCollectionWithId<T = DocumentData>(
  collectionName: string,
  subCollectionName: string
) {
  return (id: string) =>
    doc(db, collectionName, id, subCollectionName, id) as DocumentReference<T>;
}

function createSubCollectionDocumentWithId<T = DocumentData>(
  collectionName: string,
  subCollectionName: string
) {
  return (id: string, docId: string) =>
    doc(
      db,
      collectionName,
      id,
      subCollectionName,
      docId
    ) as DocumentReference<T>;
}

const artistsCollection = createCollection<Artist>(ARTISTS);

const artistCommunityCollection = createSubCollectionWithId<ArtistCommunity>(
  ARTISTS,
  COMMUNITY_INFO
);

const artistPostsCollection = createSubCollection<ArtistPost>(
  ARTISTS,
  ARTIST_POSTS
);

const artistPostCollectionDoc = createSubCollectionDocumentWithId<ArtistPost>(
  ARTISTS,
  ARTIST_POSTS
);

const artistPaymentCollection = createSubCollectionWithId<ArtistPayment>(
  ARTISTS,
  PAYMENT_DETAILS
);

const subscriptionTiersCollection = createSubCollection<ArtistSubscriptionTier>(
  ARTISTS,
  SUBSCRIPTION_TIERS
);

const usersCollection = createCollection<User>(USERS);

const userSubscriptionsCollection = createSubCollection<UserSubscription>(
  USERS,
  USER_SUBSCRIPTIONS
);

const userSubscriptionsCollectionDoc =
  createSubCollectionDocumentWithId<UserSubscription>(
    USERS,
    USER_SUBSCRIPTIONS
  );

const userInteractionsCollection = createSubCollectionWithId<UserInteractions>(
  USERS,
  USER_INTERACTIONS
);

const guestsCollection = createCollection<Guest>(GUESTS);
const podcastEpisodeCollection =
  createCollection<PodcastEpisode>(PODCAST_EPISODES);

export {
  artistsCollection,
  artistCommunityCollection,
  artistPostsCollection,
  artistPostCollectionDoc,
  artistPaymentCollection,
  subscriptionTiersCollection,
  guestsCollection,
  podcastEpisodeCollection,
  usersCollection,
  userSubscriptionsCollection,
  userSubscriptionsCollectionDoc,
  userInteractionsCollection,
};
