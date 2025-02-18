"use client";

import React from "react";
import Error from "next/error";
import Link from "next/link";
import * as Sentry from "@sentry/nextjs";
import { Header } from "@components/Header/Header";
import { Button, Container, Text, Title } from "@rola/ui/components";

function GlobalError({ error }: { error: Error }) {
  React.useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <Container className="grid h-svh grid-rows-[auto_1fr_auto]">
      <Header />
      <Container
        size="sm"
        className="flex flex-col items-center justify-center text-center"
      >
        <Title type="rola" className="text-brand">
          404
        </Title>
        <Text>Parece que algo ha salido mal :(</Text>
        <Link href="/" prefetch>
          <Button>Regresar al inicio </Button>
        </Link>
      </Container>
    </Container>
  );
}

export default GlobalError;
