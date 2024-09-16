import { ServiceError } from "../../utils/serviceError";
import { Stripe, stripe } from "../init";

async function updateAccount(id: string, payload: Stripe.AccountUpdateParams) {
  try {
    const account = await stripe.accounts.update(id, payload);

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

export { updateAccount };
