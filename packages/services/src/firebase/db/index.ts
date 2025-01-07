import { artistsServices } from "./artists";
import { podcastServices } from "./podcast";
import { usersServices } from "./users";
import { retryWrapper } from "../../utils";

export const db = {
  artists: retryWrapper(artistsServices),
  podcast: retryWrapper(podcastServices),
  users: retryWrapper(usersServices),
};
