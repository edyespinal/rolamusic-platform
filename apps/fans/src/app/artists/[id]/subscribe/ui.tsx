"use client";

import { Container, Title } from "@rola/ui/components";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

function SubscriptionPageUI({ clientSecret }: { clientSecret: string }) {
  return (
    <Container size="lg">
      <Title type="rola" order={2} align="center">
        Sub
      </Title>

      <div id="checkout" className="py-8">
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{
            clientSecret,
          }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </div>
    </Container>
  );
}

export { SubscriptionPageUI };
