import { ServiceError } from "../../utils/serviceError";
import { stripe, Stripe } from "../init";

async function getAccount(id: string) {
  try {
    return stripe.accounts.retrieve(id);
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

export { getAccount };
