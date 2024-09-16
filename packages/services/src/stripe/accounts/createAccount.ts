import { ServiceError } from "../../utils/serviceError";
import { stripe, Stripe } from "../init";

async function createAccount(payload: Stripe.AccountCreateParams) {
  try {
    const account = await stripe.accounts.create(payload);

    return account;
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

export { createAccount };
