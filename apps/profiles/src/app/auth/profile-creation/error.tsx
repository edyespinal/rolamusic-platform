"use client";

import { Button, Container, Title } from "@rola/ui/components";
import { ErrorPageProps } from "@typings/globals";

export default function Error({ reset }: ErrorPageProps) {
  return (
    <Container size="sm" className="flex flex-col items-center justify-center">
      <Title order={3}>Algo ha salido mal. Por favor, intenta de nuevo.</Title>
      <Button onClick={() => reset()}>Intentar de nuevo</Button>
    </Container>
  );
}
