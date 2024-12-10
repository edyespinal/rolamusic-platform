import { addEpisode } from "./addEpisode";
import { getEpisodes } from "./getEpisodes";
import { getGuests } from "./getGuests";
import { getLatestEpisodes } from "./getLatestEpisodes";
import { guestRequest } from "./guestRequest";

export const podcastServices = {
  getEpisodes,
  getLatestEpisodes,
  getGuests,
  guestRequest,
  addEpisode,
};
