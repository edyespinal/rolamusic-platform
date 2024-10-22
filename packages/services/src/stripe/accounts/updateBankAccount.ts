import { ServiceError } from "../../utils/serviceError";
import { stripe, Stripe } from "../init";

async function updateBankAccount(
  stripeAccountId: string,
  bankAccountId: string,
  payload: Stripe.AccountUpdateExternalAccountParams
) {
  try {
    const bankAccount = await stripe.accounts.updateExternalAccount(
      stripeAccountId,
      bankAccountId,
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

export { updateBankAccount };
