import Stripe from "stripe";
import { stripe } from "../init";
import { ServiceError } from "../../utils/serviceError";

async function listSubscriptions(params: Stripe.SubscriptionListParams) {
  try {
    const subscriptions = await stripe.subscriptions.list(params);

    return {
      success: true,
      data: subscriptions.data,
      hasMore: subscriptions.has_more,
      lastResponse: subscriptions.lastResponse,
    };
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

export { listSubscriptions };
