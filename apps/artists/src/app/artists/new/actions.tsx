"use server";

import { currentUser } from "@clerk/nextjs/server";
import { db } from "@rola/services/firebase";
import { Artist } from "@rola/services/schemas";
import { RequiredFields } from "../../../../../../packages/services/src/utils";

export async function createArtist(values: RequiredFields<Omit<Artist, "id">>) {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  return db.artists.createArtist({
    name: values.name,
    email: values.email,
    genres: [],
    location: {
      country: "",
      city: "",
      state: values.location.state,
    },
    members: values.members ?? [],
    year: values.year ?? "",
    admin: user?.id,
    fans: [],
    active: false,
  });
}
