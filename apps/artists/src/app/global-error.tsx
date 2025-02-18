"use client";

import React from "react";
import Error from "next/error";
import Link from "next/link";
import * as Sentry from "@sentry/nextjs";
import { Footer } from "@components/Footer/Footer";
import { Header } from "@components/Header/Header";
import { Button, Container, Text, Title } from "@rola/ui/components";

function GlobalError({ error }: { error: Error }) {
  React.useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <Container size="xl" className="grid h-svh grid-rows-[auto_1fr_auto]">
      <Header />
      <Container size="sm" className="grid place-items-center text-center">
        <div>
          <Title>404</Title>
          <Text className="pb-4">
            Lo sentimos, algo ha salido mal. Por favor, intenta de nuevo.
          </Text>

          <Link href="/">
            <Button>Volver al inicio</Button>
          </Link>
        </div>
      </Container>
      <Footer />
    </Container>
  );
}

export default GlobalError;
