"use client";

import { Button, Container, Text, Title } from "@rola/ui/components";
import Link from "next/link";
import React from "react";

function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <Container className="grid place-items-center h-svh">
      <Title order={3}>404</Title>
      <Text>Lo sentimos, algo ha salido mal.</Text>
      <Button onClick={() => reset()}>Intentar de nuevo</Button>
      <Link href="/">Volver al inicio</Link>
    </Container>
  );
}

export default ErrorPage;
