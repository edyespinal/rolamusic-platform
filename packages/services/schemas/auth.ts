import z from "zod";

export const emailSchema = z.object({
  email: z.string().email("El correo electrónico no es válido"),
});

export const authSchema = emailSchema.extend({
  password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
});

export type Email = z.infer<typeof emailSchema>;
export type Auth = z.infer<typeof authSchema>;
