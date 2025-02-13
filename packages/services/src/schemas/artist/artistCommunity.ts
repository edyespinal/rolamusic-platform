import { z } from "zod";

export const artistCommunitySchema = z.object({
  totalSubscribers: z.number().nonnegative(),
  totalPosts: z.number().nonnegative(),
  topFans: z.array(
    z.object({
      id: z.string(),
    })
  ),
});
