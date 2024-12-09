"use server";

import { clerkClient } from "@clerk/nextjs/server";

async function setUserRole(userId: string, role: "artist" | "fan") {
  await clerkClient.users.updateUserMetadata(userId, {
    publicMetadata: {
      role,
    },
  });

  return {
    success: true,
  };
}

export { setUserRole };
