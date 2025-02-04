import { z } from "zod";
import { POST_TYPES } from "../../constants";

const postCommentSchema = z.object({
  id: z.string(),
  user: z.object({
    id: z.string(),
    displayName: z.string(),
    photoURL: z.string().url(),
  }),
  content: z
    .string()
    .min(1, "El contenido del comentario no puede estar vacío"),
  date: z.date(),
  likes: z.number().nonnegative(),
  comments: z.array(
    z.object({
      user: z.string(),
      content: z
        .string()
        .min(1, "El contenido del comentario no puede estar vacío"),
      date: z.date(),
      likes: z.number().nonnegative(),
    })
  ),
});

const artistPostSchema = z.object({
  id: z.string(),
  active: z.boolean(),
  access: z.number().nonnegative().int(),
  type: z.union([
    z.literal(POST_TYPES.TEXT),
    z.literal(POST_TYPES.IMAGE),
    z.literal(POST_TYPES.VIDEO),
  ]),
  title: z
    .string()
    .min(1, "El título del post no puede estar vacío")
    .max(64, "El título del post no puede tener mas de 64 caracteres"),
  caption: z
    .string()
    .max(2048, "El contenido del post no puede tener mas de 1024 caracteres")
    .optional(),
  url: z.string().optional(),
  date: z.date().or(z.object({ seconds: z.number(), nanoseconds: z.number() })),
  likes: z.array(z.string()),
  comments: z.array(postCommentSchema),
  tags: z.array(z.string()).optional(),
});

export { artistPostSchema, postCommentSchema };

export type ArtistPost = z.infer<typeof artistPostSchema>;
export type PostComment = z.infer<typeof postCommentSchema>;
