import { ArtistSubscriptionTier } from "@rola/services/schemas";

export type FormTier = Omit<ArtistSubscriptionTier, "perks" | "prices"> & {
  perks: {
    text: string;
  }[];
  price: number;
};
