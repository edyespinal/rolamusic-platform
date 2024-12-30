"use client";

import { Footer } from "@components/Footer/Footer";
import { Header } from "@components/Header/Header";
import { Button, Container, Text, Title } from "@rola/ui/components";
import Link from "next/link";

function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <Container size="xl" className="grid h-svh grid-rows-[auto_1fr_auto]">
      <Header />
      <Container size="sm" className="grid place-items-center text-center">
        <div>
          <Title className="text-brand pb-4">:(</Title>

          <Text className="">
            Lo sentimos, algo ha salido mal. Por favor, intenta de nuevo.
          </Text>
          <Text className="pb-8">{error.message}</Text>

          <Button onClick={() => reset()}>Intentar de nuevo</Button>

          <Text className="pt-24">Contacta con nuestro equipo de soporte</Text>
          <a
            href="mailto:soporte@rolamusic.app"
            className="text-brand hover:underline"
          >
            soporte@rolamusic.app
          </a>
        </div>
      </Container>
      <Footer />
    </Container>
  );
}

export default Error;
