"use server";

import { currentUser } from "@clerk/nextjs/server";
import { services } from "@rola/services/firebase";
import { Artist } from "@rola/services/schemas";
import { RequiredFields } from "@rola/services/utils";

export async function createArtist(values: RequiredFields<Omit<Artist, "id">>) {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  return services.createArtist({
    name: values.name,
    email: values.email,
    genres: [],
    location: {
      country: "",
      city: "",
      postalCode: "",
      province: values.location.province,
    },
    members: values.members ?? [],
    year: values.year ?? "",
    admin: user?.id,
    fans: [],
    active: false,
  });
}
