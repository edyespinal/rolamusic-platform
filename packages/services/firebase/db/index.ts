import { artistsServices } from "./artists";
import { guestsServices } from "./guests";
import { usersServices } from "./users";

export const services = {
  ...artistsServices,
  ...guestsServices,
  ...usersServices,
};
