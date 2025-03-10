"use client";

import { Button, Container, Text, Title } from "@rola/ui/components";
import Link from "next/link";
import React from "react";

function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <Container className="flex flex-col items-center justify-center gap-2 h-svh">
      <Title order={3}>404</Title>
      <Text className="mb-8">Lo sentimos, algo ha salido mal.</Text>
      <Button onClick={() => reset()}>Intentar de nuevo</Button>
      <Link href="/">
        <Button variant="link">Volver al inicio</Button>
      </Link>
    </Container>
  );
}

export default ErrorPage;
