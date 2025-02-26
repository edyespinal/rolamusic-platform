"use server";

import { clerkClient } from "@clerk/nextjs/server";
import { FormValues } from "./data";
import { db } from "@rola/services/firebase";
import { Genre } from "@rola/services/utils";

async function updateUserProfile(userId: string, payload: FormValues) {
  const [] = await Promise.all([
    clerkClient().users.updateUser(userId, {
      firstName: payload.firstName,
      lastName: payload.lastName,
    }),
    db.users.updateUser(userId, {
      genres: payload.genres as Genre[],
      displayName: `${payload.firstName} ${payload.lastName}`,
    }),
  ]);
}

export { updateUserProfile };
