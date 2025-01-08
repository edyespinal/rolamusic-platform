import { z } from "zod";
import { subscriptionTierSchema } from "./subscriptionTier";
import { artistPostSchema } from "./artistPost";

export const artistCommunitySchema = z.object({
  posts: z.array(artistPostSchema),
  subscriptions: z.object({
    total: z.number().nonnegative(),
    tiers: z.array(
      z.object({
        subscribers: z.array(z.string()),
        tier: subscriptionTierSchema.pick({
          id: true,
          active: true,
          label: true,
        }),
      })
    ),
    topFans: z.array(
      z.object({
        id: z.string(),
        displayName: z.string(),
        photoURL: z.string().url(),
      })
    ),
  }),
});
