import z from "zod";
import { artistSchema } from "./artist";

const userSchema = z.object({
  id: z.string(),
  email: z.string().email("El correo electrónico no es válido"),
  displayName: z.string().min(1, "El nombre de usuario no puede estar vacío"),
  photoURL: z.string().url("La imagen de perfil no es válida"),
  artists: z.array(
    artistSchema.pick({ id: true, name: true, profileURL: true, genres: true })
  ),
  supporting: z.array(
    artistSchema.pick({ id: true, name: true, profileURL: true, genres: true })
  ),
  genres: z.array(z.string()),
});

export { userSchema };

export type User = z.infer<typeof userSchema>;
