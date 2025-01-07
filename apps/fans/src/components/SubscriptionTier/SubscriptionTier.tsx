"use client";

import { ArtistSubscriptionTier } from "@rola/services/schemas";
import { cn } from "@rola/tailwind-config/utils";
import { Button, Container, Icon, Text, Title } from "@rola/ui/components";
import Link from "next/link";
import React from "react";

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
        "relative flex grow flex-col gap-4 rounded-2xl border-2 px-8 py-4",
        highlighted ? "border-brand" : "border"
      )}
    >
      {highlighted && (
        <span className="bg-brand absolute -top-4 right-3 rounded-bl-xl rounded-tr-xl px-4 py-2 font-semibold text-black">
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

      <Link href={`/artists/${artistId}/subscribe?tier=${tier.id}`}>
        <Button loading={isLoading} onClick={() => setIsLoading(true)}>
          Unirme a la comunidad
        </Button>
      </Link>

      <Container>
        <Text className="text-brand">¡Gracias por tu apoyo!</Text>
        {tier.perks?.map((perk, i) => (
          <Text key={i} className="flex">
            <Icon name="check" size={20} className="text-brand mr-1" />
            {perk}
          </Text>
        ))}
      </Container>
    </Container>
  );
}

export { SubscriptionTier };
