import { ServiceError } from "../../utils/serviceError";
import { Stripe, stripe } from "../init";

async function createPrice(
  artistName: string,
  stripeAccountId: string,
  name: string,
  value: number
) {
  try {
    const product = await stripe.products.create(
      {
        name: `${artistName}-${name}`,
      },
      {
        stripeAccount: stripeAccountId,
      }
    );

    const [monthlyPrice, yearlyPrice] = await Promise.all([
      stripe.prices.create(
        {
          currency: "eur",
          unit_amount: value,
          nickname: name,
          recurring: {
            interval: "month",
          },
          product: product.id,
        },
        {
          stripeAccount: stripeAccountId,
        }
      ),
      stripe.prices.create(
        {
          currency: "eur",
          unit_amount: value * 10,
          nickname: name,
          recurring: {
            interval: "year",
          },
          product: product.id,
        },
        {
          stripeAccount: stripeAccountId,
        }
      ),
    ]);

    return {
      success: true,
      data: {
        monthly: monthlyPrice,
        yearly: yearlyPrice,
      },
    };
  } catch (e) {
    const error = e as Stripe.StripeRawError;

    throw new ServiceError({
      service: "stripe.prices",
      code: error.code ?? "unknown",
      message: error.message ?? "unknown",
      data: {
        statusCode: error.statusCode,
        detail: error.detail,
      },
    });
  }
}

export { createPrice };
