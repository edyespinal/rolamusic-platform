import { POST_TYPES } from "@rola/services/constants";
import {
  ArtistCommunity,
  ArtistSubscriptionTier,
  User,
} from "@rola/services/schemas";
import { Genre } from "@rola/services/utils";

export type ArtistPageProps = {
  id: string;
  name: string;
  coverURL?: string;
  profileURL?: string;
  genres: Genre[];
  bio?: string;
  community: ArtistCommunity;
  subscriptionTiers: ArtistSubscriptionTier[];
  supporting?: User["supporting"][number];
  posts: ArtistPagePost[];
};

export type ArtistPagePost = {
  id: string;
  type: (typeof POST_TYPES)[keyof typeof POST_TYPES];
  access: boolean;
  tier: string;
  title: string;
  caption: string;
  date: string;
  likes: number;
  likedByUser: boolean;
  comments: number;
  url?: string;
};
