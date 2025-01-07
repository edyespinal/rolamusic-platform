import { retryWrapper } from "../utils";
import { accountsServices } from "./accounts";
import { checkoutServices } from "./checkout";
import { customersServices } from "./customers";
import { pricesServices } from "./prices";
import { subscriptionsServices } from "./subscriptions";

const stripe = {
  accounts: retryWrapper(accountsServices),
  checkout: retryWrapper(checkoutServices),
  customers: retryWrapper(customersServices),
  prices: retryWrapper(pricesServices),
  subscriptions: retryWrapper(subscriptionsServices),
};

export { stripe };
