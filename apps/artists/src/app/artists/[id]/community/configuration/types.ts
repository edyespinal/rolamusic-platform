export type FormTier = {
  tierId?: string;
  active: boolean;
  access: number;
  recommended: boolean;
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
