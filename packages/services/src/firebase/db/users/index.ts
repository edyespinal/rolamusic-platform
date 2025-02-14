import { createUser } from "./createUser";
import { getUsers } from "./getUsers";
import { getUser } from "./getUser";
import { getUserArtistsSubscriptions } from "./getUserArtistsSubscriptions";
import { getUserManagedArtists } from "./getUserArtists";
import { subscribeToArtist } from "./subscribeToArtist";

export const usersServices = {
  createUser,
  getUsers,
  getUser,
  getUserArtistsSubscriptions,
  getUserManagedArtists,
  subscribeToArtist,
};
