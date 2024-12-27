import { ArtistSubscriptionTier } from "@rola/services/schemas";

export type FormTier = {
  tierId?: string;
  active: boolean;
  name: string;
  label: string;
  description?: string;
  prices?: {
    monthly: {
      value: number;
      priceId: string;
    };
    yearly: {
      value: number;
      priceId: string;
    };
  };
  price: number;
  perks: {
    name: string;
  }[];
};

export type FormValues = {
  tiers: FormTier[];
};

export type FormSubmitValues = {
  tiers: FormTier[];
};
