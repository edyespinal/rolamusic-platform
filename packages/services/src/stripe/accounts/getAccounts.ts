import { ServiceError } from "../../utils/serviceError";
import { stripe, Stripe } from "../init";

async function getAccounts() {
  try {
    return stripe.accounts.list();
  } catch (e) {
    const error = e as Stripe.StripeRawError;

    throw new ServiceError({
      service: "stripe",
      code: error.code ?? "unknown",
      message: error.message ?? "unknown",
      data: {
        statusCode: error.statusCode,
        detail: error.detail,
      },
    });
  }
}

export { getAccounts };
