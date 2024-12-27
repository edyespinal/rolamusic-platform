"use client";

import React from "react";
import { Button, Container, Form, Icon, Title } from "@rola/ui/components";
import { ArtistSubscriptionTier } from "@rola/services/schemas";
import { useCommunityConfigurationData } from "./data";
import { Tier } from "./_components/Tier";

function CommunityConfigurationPageUI({
  artistId,
  artistName,
  stripeAccountId,
  tiers,
}: {
  artistId: string;
  artistName: string;
  stripeAccountId: string;
  tiers: ArtistSubscriptionTier[];
}) {
  const { form, tierFields, addTier, handleSubmit } =
    useCommunityConfigurationData(artistId, artistName, stripeAccountId, tiers);

  return (
    <Container className="pb-24">
      <Title order={2} align="left" underline className="pb-12">
        Configuración de la suscripciones
      </Title>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Form {...form}>
          <div className="flex flex-col gap-y-6">
            {tierFields.map((tier, index) => (
              <Tier
                key={index}
                artistName={artistName}
                stripeAccountId={stripeAccountId}
                artistId={artistId}
                index={index}
                tier={tier}
                form={form}
                tiers={tiers}
              />
            ))}

            <Container className="mt-6 text-right">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() =>
                  addTier({
                    active: false,
                    name: "",
                    label: "",
                    description: "",
                    price: 3,
                    perks: [
                      {
                        name: "",
                      },
                    ],
                  })
                }
              >
                <Icon name="plus" className="mr-2" />
                Agregar suscripción
              </Button>
            </Container>
          </div>
        </Form>
      </form>
    </Container>
  );
}

export { CommunityConfigurationPageUI };
