import { z } from "zod";
import {
  BANK_TRANSFER,
  CIF,
  COMPANY,
  DNI,
  FREELANCE,
  NIE,
  NIF,
  INDIVIDUAL,
  PAYPAL,
} from "../constants";
import { Genre } from "../utils/genres";
import { AddressSchema } from "./utils";
import { subscribe } from "diagnostics_channel";

const artistMemberSchema = z.object({
  name: z
    .string()
    .min(3, "El nombre del miembro debe tener al menos 3 caracteres"),
  role: z
    .string()
    .min(3, "El rol del miembro debe tener al menos 3 caracteres"),
});

const artistCommunitySchema = z.object({
  message: z
    .string()
    .min(1, "El mensaje de la comunidad no puede estar vacío")
    .optional(),
  videoURL: z.string().optional(),
  songs: z.array(z.string()).optional(),
  subscriptions: z.object({
    total: z.number().nonnegative(),
    types: z.array(
      z.object({
        name: z.string(),
        subscribers: z.number(),
      })
    ),
    topFans: z.array(
      z.object({
        id: z.string(),
        displayName: z.string(),
        photoURL: z.string().url(),
      })
    ),
  }),
});

const artistPaymentSchema = z.object({
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

const artistAlbumsSchema = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
    coverURL: z.string(),
    year: z.string(),
  })
);

const artistSocialsSchema = z.array(
  z.object({
    name: z.string().min(1),
    url: z.string().url(),
  })
);

const artistSchema = z.object({
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

export { artistSchema };
export { artistMemberSchema };
export { artistCommunitySchema };
export { artistPaymentSchema };
export { artistAlbumsSchema };
export { artistSocialsSchema };

export type Artist = z.infer<typeof artistSchema>;
export type ArtistMember = z.infer<typeof artistMemberSchema>;
export type ArtistCommunity = z.infer<typeof artistCommunitySchema>;
export type ArtistPayment = z.infer<typeof artistPaymentSchema>;
export type ArtistAlbums = z.infer<typeof artistAlbumsSchema>;
export type ArtistSocials = z.infer<typeof artistSocialsSchema>;

export type ArtistSubscriptionTier = "basic" | "premium" | "gold";
