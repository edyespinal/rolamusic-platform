import Stripe from "stripe";
import { stripe } from "../init";
import { ServiceError } from "../../utils/serviceError";

async function getCustomer(
  customerId: string,
  params?: Stripe.CustomerRetrieveParams
) {
  try {
    const customer = await stripe.customers.retrieve(customerId, params);

    return {
      success: true,
      data: customer as Stripe.Customer & Stripe.CustomerRetrieveParams,
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

export { getCustomer };
