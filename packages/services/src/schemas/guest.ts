import z from "zod";

const guestsSchema = z.object({
  id: z.string(),
  email: z.string().email("El correo electrónico no es válido"),
  name: z.string().min(1, "El nombre del invitado no puede estar vacío"),
  socials: z
    .array(
      z.object({
        name: z.string().min(1),
        url: z.string().url(),
      })
    )
    .optional(),
});

export { guestsSchema };

export type Guest = z.infer<typeof guestsSchema>;
