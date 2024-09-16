import { artistsServices } from "./artists";
import { podcastServices } from "./podcast";
import { usersServices } from "./users";

export const db = {
  artists: artistsServices,
  podcast: podcastServices,
  users: usersServices,
};
