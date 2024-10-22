import React from "react";
import { Container, Text, Title } from "@rola/ui/components";

import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

function NotFound() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] overflow-x-hidden bg-[url('/static/img/bg/pedals-1.jpg')] bg-cover">
      <Header />

      <Container as="main" size="md" className="grid h-full place-items-center">
        <Container>
          <Title className="text-brand">404</Title>
          <Text className="mt-4 text-center">
            No hemos encontrado la página que buscabas
          </Text>
        </Container>
      </Container>
      <Footer />
    </div>
  );
}

export default NotFound;
