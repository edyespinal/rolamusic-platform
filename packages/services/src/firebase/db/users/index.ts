import { createUser } from "./createUser";
import { getUsers } from "./getUsers";
import { getUser } from "./getUser";
import { updateUser } from "./updateUser";
import { getUserManagedArtists } from "./getUserArtists";
import { getUserArtistsSubscriptions } from "./getUserArtistsSubscriptions";
import { subscribeToArtist } from "./subscribeToArtist";
import { createUserSubscription } from "./createUserSubscription";
import { getUserSubscription } from "./getUserSubscription";
import { listUserSubscriptions } from "./listUserSubscriptions";

export const usersServices = {
  createUser,
  getUser,
  getUsers,
  updateUser,
  createUserSubscription,
  getUserSubscription,
  listUserSubscriptions,
  getUserArtistsSubscriptions,
  getUserManagedArtists,
  subscribeToArtist,
};
