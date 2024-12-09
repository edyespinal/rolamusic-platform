import Stripe from "stripe";
import { stripe } from "../init";
import { ServiceError } from "../../utils/serviceError";

async function getBalance(id: string) {
  try {
    return stripe.balance.retrieve({
      stripeAccount: id,
    });
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

export { getBalance };
