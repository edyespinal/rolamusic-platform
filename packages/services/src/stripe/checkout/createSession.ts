import { ServiceError } from "../../utils/serviceError";
import { Stripe, stripe } from "../init";

async function createSession({
  priceId,
  stripeAccountId,
  returnUrl,
}: {
  priceId: string;
  stripeAccountId: string;
  returnUrl: string;
}) {
  try {
    return stripe.checkout.sessions.create(
      {
        ui_mode: "hosted",
        mode: "subscription",
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        subscription_data: {
          application_fee_percent: 30,
        },
        success_url: `${returnUrl}&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${returnUrl}`,
      },
      {
        stripeAccount: stripeAccountId,
      }
    );
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

export { createSession };
