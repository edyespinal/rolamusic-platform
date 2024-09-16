import React from "react";
import { Container, Title, Text, Underline, Button } from "@rola/ui/components";
import Link from "next/link";

function HomePageUI() {
  return (
    <Container size="sm" className="px-4 pb-24 pt-12 lg:px-0">
      <Container className="pb-8 text-center text-2xl font-bold uppercase">
        <Title order={3}>Centro de Ayuda</Title>
        <Underline />
      </Container>
      <Container className="mb-12 lg:text-center">
        <Text className="mb-4">
          Si tienes preguntas o necesitas ayuda, puedes contactar con nuestro
          equipo al siguiente correo electrónico:
        </Text>
        <a
          href="mailto:hola@rolamusic.app"
          className="text-brand hover:underline"
        >
          hola@rolamusic.app
        </a>
      </Container>

      <Container className="flex flex-col items-center gap-2">
        <Link href="/faq">
          <Button variant="link">Preguntas frecuentes</Button>
        </Link>
        <Link href="/legal-notice">
          <Button variant="link">Aviso legal</Button>
        </Link>
        <Link href="/privacy-policy">
          <Button variant="link">Política de privacidad</Button>
        </Link>
        <Link href="/cookies-policy">
          <Button variant="link">Política de cookies</Button>
        </Link>
      </Container>
    </Container>
  );
}

export { HomePageUI };
