import { ARTIST_POST_TYPES } from "../../constants";
import { z } from "zod";

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
  type: z.union([
    z.literal(ARTIST_POST_TYPES.AUDIO),
    z.literal(ARTIST_POST_TYPES.LINK),
    z.literal(ARTIST_POST_TYPES.PDF),
    z.literal(ARTIST_POST_TYPES.PHOTO),
    z.literal(ARTIST_POST_TYPES.TEXT),
    z.literal(ARTIST_POST_TYPES.VIDEO),
    z.literal(ARTIST_POST_TYPES.POLL),
  ]),
  title: z.string().min(1, "El titulo del post no puede estar vacío"),
  image: z.string().url("La imagen no es valida").optional(),
  caption: z.string().min(1, "El contenido del post no puede estar vacío"),
  date: z.date(),
  likes: z.number().nonnegative(),
  comments: z.object({
    total: z.number().nonnegative(),
    topComments: z.array(postComment).max(3),
  }),
});
