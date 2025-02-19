import Stripe from "stripe";
import { stripe } from "../init";
import { ServiceError } from "../../utils/serviceError";

async function searchCustomers(key: string, value: string) {
  try {
    return stripe.customers.search({
      query: `${key}:"${value}"`,
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

export { searchCustomers };
