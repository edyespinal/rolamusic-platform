import { z } from "zod";
import { Genre } from "../../utils/genres";
import { artistMemberSchema } from "./artistMember";

export const artistSchema = z.object({
  id: z.string(),
  admin: z.string(),
  name: z.string().min(1, "El nombre del artista no puede estar vacío"),
  slug: z.string().optional(),
  active: z.boolean(),
  email: z.string().email("El correo electrónico no es válido"),
  genres: z.array(z.custom<Genre>()),
  bio: z
    .string()
    .min(1, "La biografía del artista no puede estar vacía")
    .max(504, "La biografñia del artista no puede tener más de 504 caracteres")
    .optional(),
  year: z.string().optional(),
  members: z.array(artistMemberSchema),
  fans: z.array(z.string()),
  fansSummary: z
    .object({
      total: z.number().nonnegative(),
      topFans: z.array(
        z.object({
          id: z.string(),
          displayName: z.string(),
          photoURL: z.string().url(),
        })
      ),
    })
    .optional(),
  coverURL: z.string().optional(),
  profileURL: z.string().optional(),
  location: z.object({
    country: z.string(),
    city: z.string(),
    state: z.string(),
  }),
  phone: z
    .object({
      code: z.string(),
      number: z.string(),
    })
    .optional(),
});
