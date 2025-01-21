import { z } from "zod";
import { POST_TYPES } from "../../constants";

export const postComment = z.object({
  id: z.string(),
  content: z
    .string()
    .min(1, "El contenido del comentario no puede estar vacío"),
  date: z.date(),
  likes: z.number().nonnegative(),
});

export const artistPostSchema = z.object({
  id: z.string(),
  active: z.boolean(),
  access: z.number().nonnegative().int(),
  type: z.union([
    z.literal(POST_TYPES.TEXT),
    z.literal(POST_TYPES.IMAGE),
    z.literal(POST_TYPES.VIDEO),
  ]),
  url: z.string().optional(),
  caption: z.string().min(1, "El contenido del post no puede estar vacío"),
  date: z.date(),
  likes: z.array(z.string()),
  comments: z.array(postComment),
  commentsSummary: z
    .object({
      total: z.number().nonnegative(),
      topComments: z.array(postComment).max(3),
    })
    .optional(),
});
