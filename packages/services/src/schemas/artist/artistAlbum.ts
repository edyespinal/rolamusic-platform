import { z } from "zod";

export const artistAlbumsSchema = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
    coverURL: z.string(),
    year: z.string(),
  })
);
