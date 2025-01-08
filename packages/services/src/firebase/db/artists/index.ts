import { createArtist } from "./createArtist";
import { createArtistCommunity } from "./createArtistCommunity";
import { createArtistSubscriptionTier } from "./createArtistSubscriptionTier";
import { getArtists } from "./getArtists";
import { getArtist } from "./getArtist";
import { getActiveArtists } from "./getActiveArtists";
import { getArtistCommunity } from "./getArtistCommunity";
import { getArtistPaymentDetails } from "./getArtistPaymentDetails";
import { getArtistSubscriptionTiers } from "./getArtistSubscriptionTiers";
import { updateArtist } from "./updateArtist";
import { updateArtistActivation } from "./updateArtistActivation";
import { updateArtistCommunity } from "./updateArtistCommunity";
import { updateArtistCoverImage } from "./updateArtistCoverImage";
import { updateArtistPaymentDetails } from "./updateArtistPaymentDetails";
import { updateArtistProfileImage } from "./updateArtistProfileImage";
import { updateArtistSubscriptionTier } from "./updateArtistSubscriptionTier";

export const artistsServices = {
  createArtist,
  createArtistCommunity,
  createArtistSubscriptionTier,
  getArtists,
  getArtist,
  getActiveArtists,
  getArtistCommunity,
  getArtistPaymentDetails,
  getArtistSubscriptionTiers,
  updateArtist,
  updateArtistActivation,
  updateArtistCoverImage,
  updateArtistCommunity,
  updateArtistPaymentDetails,
  updateArtistProfileImage,
  updateArtistSubscriptionTier,
};
