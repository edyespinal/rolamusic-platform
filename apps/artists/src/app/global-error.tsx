"use client";

import { Footer } from "@components/Footer/Footer";
import { Header } from "@components/Header/Header";
import { Button, Container, Text, Title } from "@rola/ui/components";
import Link from "next/link";

function GlobalError() {
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
