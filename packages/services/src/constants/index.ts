export const ARTISTS = "artists";
export const FANS = "fans";
export const SUBSCRIPTION_TIERS = "subscriptionTiers";
export const GUESTS = "guestlist";
export const USERS = "users";
export const POSTS = "posts";
export const PODCAST = "podcast";
export const PODCAST_EPISODES = "podcastEpisodes";

export const COMMUNITY_INFO = "communityInfo";
export const ARTIST_POSTS = "artistPosts";
export const PAYMENT_DETAILS = "paymentInfo";

export const USER_INTERACTIONS = "userInteractions";

export const INDIVIDUAL = "individual";
export const FREELANCE = "freelance";
export const COMPANY = "company";

export const DNI = "DNI";
export const NIE = "NIE";
export const CIF = "CIF";
export const NIF = "NIF";

export const BANK_TRANSFER = "bankTransfer";
export const PAYPAL = "paypal";

export const ERROR_CODES = {
  UNAUTHENTICATED: "UNAUTHENTICATED",
  UNAUTHORIZED: "UNAUTHORIZED",
  BAD_REQUEST: "BAD_REQUEST",
  USER_NOT_FOUND: "USER_NOT_FOUND",
  ARTIST_NOT_FOUND: "ARTIST_NOT_FOUND",
  ARTIST_POST_NOT_FOUND: "ARTIST_POST_NOT_FOUND",
};

export const POST_TYPES = {
  TEXT: "TEXT",
  IMAGE: "IMAGE",
  VIDEO: "VIDEO",
} as const;
