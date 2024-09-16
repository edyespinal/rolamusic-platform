import React from "react";
import Link from "next/link";
import { Header } from "@components/Header/Header";
import { Container, Title, Underline, Button, Text } from "@rola/ui/components";

function HomePageUI() {
  return (
    <Container size="lg">
      <Header />
      <Container size="sm" className="py-24 text-center">
        <Container className="pb-12">
          <Title order={4} className="uppercase">
            Admin Dashboard
          </Title>
          <Underline />
        </Container>

        <Container className="flex flex-col gap-4">
          <Container className="mb-4 flex flex-col gap-2">
            <Text className="bg-brand font-semibold uppercase text-black">
              Artistas
            </Text>
            <Link href="/artists">
              <Button variant="link">Artistas</Button>
            </Link>
          </Container>
          <Container className="mb-4 flex flex-col gap-2">
            <Text className="bg-brand font-semibold uppercase text-black">
              Podcast
            </Text>
            <Button variant="link">
              <Link href="/podcast/guests">Invitados</Link>
            </Button>
            <Button variant="link">
              <Link href="/podcast/episodes">Episodios</Link>
            </Button>
            <Button variant="link">
              <Link href="/podcast/episodes/new">Nuevo episodio</Link>
            </Button>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}

export { HomePageUI };
