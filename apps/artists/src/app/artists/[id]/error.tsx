"use client";

import { Button, Container, Text, Title } from "@rola/ui/components";

function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <Container
      size="sm"
      className="flex flex-col items-center pt-32 text-center"
    >
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
    </Container>
  );
}

export default ErrorPage;
