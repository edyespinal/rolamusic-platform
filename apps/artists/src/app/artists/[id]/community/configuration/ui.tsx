"use client";

import React from "react";
import Link from "next/link";
import { Button, Container, Switch, Text, Title } from "@rola/ui/components";
import { PencilIcon, PlusIcon } from "@rola/ui/icons";
import { ArtistSubscriptionTier } from "@rola/services/schemas";

function CommunityConfigurationPageUI({
  artistId,
  tiers,
}: {
  artistId: string;
  tiers: ArtistSubscriptionTier[];
}) {
  return (
    <Container className="pb-24">
      <Container className="flex flex-col justify-between pb-12 lg:flex-row">
        <Title order={2} align="left" underline className="pb-4">
          Configuración de la suscripciones
        </Title>

        <Link href={`/artists/${artistId}/community/configuration/new`}>
          <Button type="button" variant="outline" size="sm">
            <PlusIcon className="mr-2" />
            Agregar suscripción
          </Button>
        </Link>
      </Container>

      <Container className="flex flex-col gap-8">
        {tiers.map((tier, index) => (
          <Container
            key={index}
            className="bg-background-dark flex flex-col gap-y-4 rounded-xl p-8"
          >
            <Container className="flex justify-between">
              <Title order={4} align="left" underline>
                {tier.name}
              </Title>
              <Link
                href={`/artists/${artistId}/community/configuration/${tier.id}`}
              >
                <Button type="button" variant="outline" size="sm">
                  <PencilIcon className="mr-2" />
                  Editar
                </Button>
              </Link>
            </Container>

            <div className="flex items-center gap-3">
              <Text>Activa</Text>
              <Switch checked={tier.active} disabled />
            </div>

            <div className="flex items-center gap-3">
              <Text>Recomendada</Text>
              <Switch checked={tier.recommended} disabled />
            </div>

            <div>
              <Text>Nombre para mostrar</Text>
              <Text className="bg-black px-3 py-1">{tier.label}</Text>
            </div>

            <div>
              <Text>Descripción</Text>
              <Text className="bg-black px-3 py-1">{tier.description}</Text>
            </div>

            <div>
              <Text>Precio</Text>
              <Text className="bg-black px-3 py-1">
                {(tier.prices.monthly.value / 100).toFixed(2)} €
              </Text>
            </div>

            <div className="flex flex-col gap-2">
              <Text>Perks</Text>
              {tier.perks.map((perk, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Text className="w-full bg-black px-3 py-1">{perk}</Text>
                </div>
              ))}
            </div>
          </Container>
        ))}
      </Container>
    </Container>
  );
}

export { CommunityConfigurationPageUI };
