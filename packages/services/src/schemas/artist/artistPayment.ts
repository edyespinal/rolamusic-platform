import { z } from "zod";
import {
  BANK_TRANSFER,
  CIF,
  COMPANY,
  DNI,
  FREELANCE,
  INDIVIDUAL,
  NIE,
  NIF,
  PAYPAL,
} from "../../constants";
import { AddressSchema } from "../utils";

export const artistPaymentSchema = z.object({
  type: z.union([
    z.literal(INDIVIDUAL),
    z.literal(FREELANCE),
    z.literal(COMPANY),
  ]),
  stripeAccountId: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email("El correo electrónico no es válido"),
  phone: z
    .object({
      countryCode: z.string(),
      number: z.string(),
    })
    .optional(),
  taxId: z.string().optional(),
  document: z.object({
    type: z.union([
      z.literal(DNI),
      z.literal(NIE),
      z.literal(NIF),
      z.literal(CIF),
    ]),
    number: z.string(),
  }),
  address: AddressSchema,
  paymentPreferences: z
    .object({
      type: z.union([z.literal(BANK_TRANSFER), z.literal(PAYPAL)]),
      country: z.string(),
      currency: z.string().optional(),
      metadata: z.record(z.string()).optional(),
      paypal: z
        .object({
          email: z.string().email("El correo electrónico no es válido"),
        })
        .optional(),
      bank: z.object({
        bankName: z.string(),
        accountHolder: z.string().optional(),
        accountNumber: z.string().optional(),
        stripeBankAccountId: z.string().optional(),
      }),
    })
    .optional(),
  representative: z
    .object({
      firstName: z.string(),
      lastName: z.string(),
      email: z.string().email("El correo electrónico no es válido"),
      phone: z.string(),
      address: AddressSchema,
      dateOfBirth: z.object({
        year: z.string(),
        month: z.string(),
        day: z.string(),
      }),
    })
    .optional(),
});
