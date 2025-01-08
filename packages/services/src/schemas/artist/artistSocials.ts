import { z } from "zod";

export const artistSocialsSchema = z.array(
  z.object({
    name: z.string().min(1),
    url: z.string().url(),
  })
);
