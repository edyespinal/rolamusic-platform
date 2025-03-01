import z from "zod";
import { artistSchema } from "../artist";
import { Genre } from "../../utils/genres";

const userSchema = z.object({
  id: z.string(),
  email: z.string().email("El correo electrónico no es válido"),
  displayName: z.string().min(1, "El nombre de usuario no puede estar vacío"),
  photoURL: z.string().url("La imagen de perfil no es válida"),
  artists: z.array(
    artistSchema.pick({ id: true, name: true, profileURL: true, genres: true })
  ),
  supporting: z.array(
    z.object({
      id: z.string(),
      tier: z.string(),
      active: z.boolean(),
      subscriptionId: z.string(),
    })
  ),
  genres: z.array(z.string()),
  stripeAccountId: z.string(),
});

export { userSchema };
export type User = z.infer<typeof userSchema>;
