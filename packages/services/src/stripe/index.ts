import { accountsServices } from "./accounts";
import { checkoutServices } from "./checkout";

const stripe = {
  accounts: accountsServices,
  checkout: checkoutServices,
};

export { stripe };
