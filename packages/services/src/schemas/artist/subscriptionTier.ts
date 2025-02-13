import { z } from "zod";

export const subscriptionTierSchema = z.object({
  id: z.string(),
  active: z.boolean(),
  access: z.number().nonnegative().int(),
  recommended: z.boolean(),
  name: z.string().min(1, "El nombre de la suscripción no puede estar vacío"),
  label: z.string().min(1, "El label de la suscripción no puede estar vacío"),
  description: z
    .string()
    .min(1, "La descripción de la suscripción no puede estar vacía")
    .optional(),
  prices: z.object({
    monthly: z.object({
      value: z
        .number()
        .min(300, "El precio de la suscripción no puede ser menor que 3€"),
      priceId: z.string(),
    }),
    yearly: z.object({
      value: z
        .number()
        .min(3000, "El precio de la suscripción no puede ser menor que 3€"),
      priceId: z.string(),
    }),
  }),
  perks: z.array(z.string().min(1, "El beneficio no puede estar vacío")),
  subscribers: z.array(z.string()),
});
