"use client";

import { useClerk } from "@clerk/nextjs";
import { Container, Separator, Text, Title } from "@rola/ui/components";

import {
  ArrowRightIcon,
  LockIcon,
  LogOutIcon,
  PencilIcon,
} from "@rola/ui/icons";
import Link from "next/link";

function HomePageUI() {
  const { signOut } = useClerk();

  return (
    <Container size="sm" className="flex flex-col gap-4 px-4 py-12">
      <Container className="bg-background rounded-xl py-4">
        <Title order={3} align="left" className="px-6 pb-6">
          Mi cuenta
        </Title>

        <Container className="flex flex-col">
          <Link
            href="/profile"
            className="hover:bg-background-dark flex items-center justify-between px-6 py-2"
          >
            <Text className="flex items-center gap-2">
              <PencilIcon color="grey" />
              Editar perfil
            </Text>
            <ArrowRightIcon />
          </Link>

          {/* <Separator className="bg-background" />

          <Link
            href="/subscriptions"
            className="flex items-center justify-between px-6 py-2 hover:bg-black"
          >
            <Text className="flex items-center gap-2">
              <Music2Icon color="grey" />
              Mis suscripciones
            </Text>
            <ArrowRightIcon />
          </Link> */}
        </Container>
      </Container>

      {/* <Container className="bg-background rounded-xl py-4">
        <Title order={3} align="left" className="px-6 pb-6">
          Pago
        </Title>

        <Container className="flex flex-col">
          <Link
            href="/payment-methods"
            className="flex items-center justify-between px-6 py-2 hover:bg-background-dark"
          >
            <Text className="flex items-center gap-2">
              <CreditCardIcon color="grey" />
              Método de pago
            </Text>
            <ArrowRightIcon />
          </Link>
        </Container>
      </Container> */}

      <Container className="bg-background rounded-xl py-4">
        <Title order={3} align="left" className="px-6 pb-6">
          Seguridad
        </Title>

        <Container className="flex flex-col">
          <Link
            href="/reset-password"
            className="hover:bg-background-dark flex items-center justify-between px-6 py-2"
          >
            <Text className="flex items-center gap-2">
              <LockIcon color="grey" />
              Cambiar contraseña
            </Text>
            <ArrowRightIcon />
          </Link>

          <Separator className="bg-background" />

          <li
            className="hover:bg-background-dark flex cursor-pointer items-center justify-between px-6 py-2"
            onClick={() =>
              signOut({
                redirectUrl: "/auth/sign-in",
              })
            }
          >
            <Text className="flex items-center gap-2">
              <LogOutIcon color="grey" />
              Cerrar sesión
            </Text>
          </li>
        </Container>
      </Container>
    </Container>
  );
}

export { HomePageUI };
