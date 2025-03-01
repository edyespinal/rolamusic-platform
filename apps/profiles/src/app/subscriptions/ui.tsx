"use client";

import { User } from "@rola/services/schemas";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Container,
  Text,
  Title,
} from "@rola/ui/components";
import { ArrowLeftIcon } from "@rola/ui/icons";
import Link from "next/link";
import React from "react";
import { Subscription } from "./data";
import { cn } from "@rola/tailwind-config/utils";

function SubscriptionsPageUI({
  subscriptions,
}: {
  subscriptions: Subscription[];
}) {
  console.log("subscription", subscriptions);

  return (
    <Container size="sm" className="px-6 py-12">
      <Link href="/">
        <Button variant="outline" size="icon">
          <ArrowLeftIcon />
        </Button>
      </Link>

      <Title order={2} underline className="pb-6">
        Mis Suscripciones
      </Title>

      {subscriptions.length > 0 ? (
        <Container className="flex flex-col gap-6">
          {subscriptions.map((subscription) => (
            <Container
              key={subscription.id}
              className={cn(
                "bg-background flex gap-6 rounded-xl p-6",
                !subscription.active ? "opacity-60" : ""
              )}
            >
              <Avatar className="size-20">
                <AvatarImage src={subscription.profileImg} />
                <AvatarFallback>
                  <Title order={2}>{subscription.name[0]}</Title>
                </AvatarFallback>
              </Avatar>

              <Container>
                <Title order={4} align="left">
                  {subscription.name}
                </Title>
                <Text className="text-brand font-semibold">
                  {subscription.tier.label} [
                  {subscription.active ? "Activa" : "Pausada"}]
                </Text>
                <Text className="text-sm font-semibold"></Text>

                {subscription.active ? (
                  <React.Fragment>
                    <Text className="mt-4 text-sm">
                      Tu próxima factura es de{" "}
                      <span className="text-brand font-semibold">
                        {(subscription.price / 100).toFixed(2)} €
                      </span>{" "}
                      y se cobrará el{" "}
                      <span className="font-semibold">
                        {subscription.nextBillingDate.toLocaleDateString(
                          "es-ES"
                        )}
                      </span>
                    </Text>
                    <Text className="mt-2 text-sm">
                      <span className="capitalize">
                        {subscription.paymentMethod.cardBrand}
                      </span>{" "}
                      que termina en {subscription.paymentMethod.last4}
                    </Text>
                  </React.Fragment>
                ) : (
                  <Text className="mt-4 text-sm">
                    Tu última factura se realizó el{" "}
                    <span className="font-semibold">
                      {subscription.canceledAt &&
                        subscription.canceledAt.toLocaleDateString("es-ES")}
                    </span>
                  </Text>
                )}
              </Container>
            </Container>
          ))}
        </Container>
      ) : null}

      <Container className="mt-12 text-center text-sm">
        Necesitas ayuda o tienes preguntas sobre tu suscripción, escríbenos a{" "}
        <a href="mailto:soporte@rolamusic.app" className="text-brand">
          soporte@rolamusic.app
        </a>
      </Container>
    </Container>
  );
}

export { SubscriptionsPageUI };
