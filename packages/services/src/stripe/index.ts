import { accountsServices } from "./accounts";
import { checkoutServices } from "./checkout";
import { customersServices } from "./customers";
import { pricesServices } from "./prices";
import { subscriptionsServices } from "./subscriptions";

const stripe = {
  accounts: accountsServices,
  checkout: checkoutServices,
  customers: customersServices,
  prices: pricesServices,
  subscriptions: subscriptionsServices,
};

export { stripe };
