import { getArtists } from "./getArtists";
import { getArtist } from "./getArtist";
import { createArtist } from "./createArtist";
import { getArtistPaymentDetails } from "./getArtistPaymentDetails";
import { updateArtistCommunity } from "./updateArtistCommunity";
import { getArtistCommunity } from "./getArtistCommunity";
import { updateArtistPaymentDetails } from "./updateArtistPaymentDetails";
import { updateArtistProfileImage } from "./updateArtistProfileImage";
import { updateArtistCoverImage } from "./updateArtistCoverImage";
import { updateArtistActivation } from "./updateArtistActivation";
import { updateArtist } from "./updateArtist";

export const artistsServices = {
  getArtists,
  getArtist,
  getArtistCommunity,
  getArtistPaymentDetails,
  createArtist,
  updateArtist,
  updateArtistCommunity,
  updateArtistPaymentDetails,
  updateArtistProfileImage,
  updateArtistCoverImage,
  updateArtistActivation,
};
