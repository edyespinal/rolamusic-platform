"use client";

import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { ArtistAvatar } from "@components/ArtistAvatar/ArtistAvatar";
import { Container, Title } from "@rola/ui/components";
import Image from "next/image";
import React from "react";
import { useSearchParams } from "next/navigation";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

function ArtistSubscriptionPageUI({
  id,
  name,
  profileURL,
  coverURL,
}: {
  id: string;
  name: string;
  profileURL?: string;
  coverURL?: string;
}) {
  const searchParams = useSearchParams();
  const tier = searchParams.get("tier");

  const fetchClientSecret = React.useCallback(() => {
    return fetch(`/api/checkout-sessions`, {
      method: "POST",
      body: JSON.stringify({
        subscription: tier,
        returnUrl: `${window.location.origin}/artists/${id}`,
      }),
    })
      .then((res) => res.json())
      .then((res) => res.clientSecret);
  }, []);

  const options = { fetchClientSecret };

  return (
    <Container className="mb-24">
      <Container className="relative -mt-20 min-h-[25vh] lg:min-h-[50vh]">
        <Image
          src={coverURL ?? "/static/img/artists-landing-header.jpg"}
          alt={name}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </Container>

      <Container size="sm" className="text-center">
        <ArtistAvatar
          size="xl"
          name={name}
          image={profileURL}
          className="mx-auto -mt-32 mb-8"
        />
        <Title order={3} underline>
          Súmate a la comunidad de fans de <br />
          {name}
        </Title>
        <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </Container>
    </Container>
  );
}

export { ArtistSubscriptionPageUI };
