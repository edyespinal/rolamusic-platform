import { artistsServices } from "./artists";
import { podcastServices } from "./podcast";
import { postsServices } from "./posts";
import { usersServices } from "./users";
import { retryWrapper } from "../../utils";

export const db = {
  artists: retryWrapper(artistsServices),
  podcast: retryWrapper(podcastServices),
  posts: retryWrapper(postsServices),
  users: retryWrapper(usersServices),
};
