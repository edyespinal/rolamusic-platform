import { string, z } from "zod";
import { subscriptionTierSchema } from "./subscriptionTier";
import { artistPostSchema } from "./artistPost";

export const artistCommunitySchema = z.object({
  message: z
    .string()
    .min(1, "El mensaje de la comunidad no puede estar vacío")
    .optional(),
  videoURL: z.string().optional(),
  songs: z.array(z.string()).optional(),
  posts: z.array(artistPostSchema),
  subscriptions: z.object({
    total: z.number().nonnegative(),
    tiers: z.record(
      z.string(),
      z.object({
        subscribers: z.array(z.string()),
        tier: subscriptionTierSchema,
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
