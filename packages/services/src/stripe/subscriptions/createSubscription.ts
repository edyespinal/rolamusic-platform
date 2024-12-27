import { ServiceError } from "../../utils/serviceError";
import Stripe from "stripe";
import { stripe } from "../init";

async function createSubscription({
  customerId,
  priceId,
  artistStripeAccountId,
}: {
  customerId: string;
  priceId: string;
  artistStripeAccountId: string;
}) {
  try {
    return stripe.subscriptions.create({
      customer: customerId,
      items: [
        {
          price: priceId,
        },
      ],
      expand: ["latest_invoice.payment_intent"],
      transfer_data: {
        destination: artistStripeAccountId,
        amount_percent: 70,
      },
      payment_behavior: "default_incomplete",
      payment_settings: {
        save_default_payment_method: "on_subscription",
      },
      metadata: {
        artistId: artistStripeAccountId,
      },
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

export { createSubscription };
