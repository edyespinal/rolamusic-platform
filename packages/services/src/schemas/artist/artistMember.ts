import { z } from "zod";

export const artistMemberSchema = z.object({
  name: z
    .string()
    .min(3, "El nombre del miembro debe tener al menos 3 caracteres"),
  role: z
    .string()
    .min(3, "El rol del miembro debe tener al menos 3 caracteres"),
});
