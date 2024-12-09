import { ServiceError } from "../../utils/serviceError";
import { Stripe, stripe } from "../init";

async function createSession(priceId: string, returnUrl: string) {
  try {
    return stripe.checkout.sessions.create({
      ui_mode: "embedded",
      locale: "es",
      mode: "subscription",
      currency: "eur",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      return_url: `${returnUrl}?session_id={CHECKOUT_SESSION_ID}`,
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
