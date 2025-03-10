import { ServiceError } from "../../utils/serviceError";
import { Stripe, stripe } from "../init";

async function createSession({
  priceId,
  customerId,
  stripeAccountId,
  returnUrl,
  cancelUrl,
}: {
  priceId: string;
  customerId: string;
  stripeAccountId: string;
  returnUrl: string;
  cancelUrl: string;
}) {
  try {
    return stripe.checkout.sessions.create({
      ui_mode: "hosted",
      mode: "subscription",
      customer: customerId,
      customer_update: {
        address: "auto",
      },
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      subscription_data: {
        transfer_data: {
          destination: stripeAccountId,
          amount_percent: 70,
        },
      },
      automatic_tax: {
        enabled: true,
        liability: {
          type: "self",
        },
      },
      success_url: `${returnUrl}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl,
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

export { createSession };
