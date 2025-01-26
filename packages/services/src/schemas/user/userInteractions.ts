import z from "zod";

const userInteractionsSchema = z.object({
  likes: z.record(z.string(), z.array(z.string())),
});

export { userInteractionsSchema };

export type UserInteractions = z.infer<typeof userInteractionsSchema>;
