export type Subscription = {
  id: string;
  name: string;
  profileImg: string | undefined;
  active: boolean;
  price: number;
  tier: {
    id: string;
    label: string;
  };
  createdAt: Date;
  canceledAt: Date | null;
  nextBillingDate: Date;
  paymentMethod: {
    cardBrand?: string;
    last4?: string;
  };
};
