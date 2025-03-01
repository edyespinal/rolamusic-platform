import { ServiceError } from "../../utils/serviceError";
import Stripe from "stripe";
import { stripe } from "../init";

async function retrieveSubscription(id: string) {
  try {
    const subscription = await stripe.subscriptions.retrieve(id);

    if (!subscription.default_payment_method) {
      return {
        success: true,
        data: {
          subscription,
          paymentMethod: null,
        },
      };
    }

    if (typeof subscription.default_payment_method === "string") {
      const paymentMethod = await stripe.paymentMethods.retrieve(
        subscription.default_payment_method
      );

      return {
        success: true,
        data: {
          subscription,
          paymentMethod: {
            id: paymentMethod.id,
            cardBrand: paymentMethod.card?.brand,
            last4: paymentMethod.card?.last4,
          },
        },
      };
    }
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

export { retrieveSubscription };
