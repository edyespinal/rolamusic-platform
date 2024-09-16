import { addEpisode } from "./addEpisode";
import { getEpisodes } from "./getEpisodes";
import { getGuests } from "./getGuests";
import { guestRequest } from "./guestRequest";

export const podcastServices = {
  getEpisodes,
  getGuests,
  guestRequest,
  addEpisode,
};
