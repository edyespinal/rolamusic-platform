import React from "react";
import { Button, Container, Text, Title } from "@rola/ui/components";
import Link from "next/link";

function NotFound() {
  return (
    <Container
      as="main"
      size="md"
      className="flex h-full flex-col items-center justify-center"
    >
      <Title type="rola" className="text-brand text-8xl">
        404
      </Title>
      <Text className="mb-6 max-w-64 text-center">
        Parece que no hemos podido encontrar lo que buscabas
      </Text>
      <Link href="/">
        <Button size="sm">Volver al inicio</Button>
      </Link>
    </Container>
  );
}

export default NotFound;
