import { subscriptionTiers } from "@rola/services/constants";
import { stripe } from "@rola/services/stripe";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const subscriptionType: "basic" | "premium" | "gold" = body.subscription;
    const returnUrl = body.returnUrl;

    console.log(subscriptionTiers[subscriptionType]);

    const session = await stripe.checkout.createSession(
      subscriptionTiers[subscriptionType].priceId,
      returnUrl
    );

    return Response.json({ clientSecret: session.client_secret });
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
