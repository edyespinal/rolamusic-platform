"use client";

import React from "react";
import Link from "next/link";
import { SignedIn } from "@clerk/nextjs";
import { ArtistSubscriptionTier } from "@rola/services/schemas";
import { Button, Container, Text, Title } from "@rola/ui/components";
import { CheckIcon } from "@rola/ui/icons";
import { cn } from "@rola/tailwind-config/utils";

function SubscriptionTier({
  artistId,
  tier,
  highlighted,
}: {
  artistId: string;
  tier: ArtistSubscriptionTier;
  highlighted?: string;
}) {
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <Container
      className={cn(
        "relative flex h-full max-w-80 flex-col gap-4 rounded-2xl border-2 px-6 py-6 lg:max-w-full lg:px-8",
        highlighted ? "border-brand" : "border-gray"
      )}
    >
      {highlighted && (
        <span className="bg-brand absolute -top-5 right-3 rounded-bl-xl rounded-tr-xl px-4 py-2 text-sm font-semibold text-black">
          {highlighted}
        </span>
      )}
      <div className="flex items-end">
        <Text className="pr-1 text-6xl font-bold">
          {tier.prices.monthly.value / 100}
        </Text>
        <div className="mr-2 text-xl font-bold">
          <div>,00</div>
          <Text>/mes</Text>
        </div>
        <Text className="font-thin">(+IVA)</Text>
      </div>
      <Title
        type="rola"
        order={2}
        align="left"
        className="text-brand truncate text-wrap uppercase"
      >
        {tier.label}
      </Title>

      <SignedIn>
        <Link href={`/artists/${artistId}/subscribe?tier=${tier.id}`}>
          <Button loading={isLoading} onClick={() => setIsLoading(true)}>
            Suscribirme
          </Button>
        </Link>
      </SignedIn>

      <Container>
        <Text className="pb-4 pt-2">{tier.description}</Text>
        <Text className="text-brand font-semibold">Beneficios</Text>
        {tier.perks?.map((perk, i) => (
          <Text key={i} className="flex items-baseline">
            <CheckIcon className="text-brand mr-1 shrink-0" />
            {perk}
          </Text>
        ))}
      </Container>
    </Container>
  );
}

export { SubscriptionTier };
