import z from "zod";

const userSubscriptionSchema = z.object({
  id: z.string(),
  artist: z.string(),
  tier: z.string(),
  active: z.boolean(),
});

export { userSubscriptionSchema };
export type UserSubscription = z.infer<typeof userSubscriptionSchema>;
