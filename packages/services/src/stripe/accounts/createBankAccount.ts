import { stripe, Stripe } from "../init";
import { ServiceError } from "../../utils/serviceError";

async function createBankAccount(
  stripeAccountId: string,
  payload: Stripe.AccountCreateExternalAccountParams
) {
  try {
    const bankAccount = await stripe.accounts.createExternalAccount(
      stripeAccountId,
      payload
    );

    return bankAccount;
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

export { createBankAccount };
