import { ServiceError } from "../../utils/serviceError";
import Stripe from "stripe";
import { stripe } from "../init";

async function createCustomer(name: string, email: string) {
  try {
    return stripe.customers.create({
      name,
      email,
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

export { createCustomer };
