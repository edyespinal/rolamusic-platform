"use client";

import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { Button, Container, Text, Title } from "@rola/ui/components";
import Link from "next/link";

function GlobalError() {
  return (
    <Container size="xl" className="h-svh grid grid-rows-[auto_1fr_auto]">
      <Header />
      <Container size="sm" className="text-center grid place-items-center">
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
