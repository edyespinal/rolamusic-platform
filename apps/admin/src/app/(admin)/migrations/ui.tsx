"use client";

import React from "react";
import { Button, Container, Text, Title } from "@rola/ui/components";
import { migration } from "./actions";
import { Artist } from "@rola/services/schemas";

function MigrationsPageUI({ artists }: { artists: Artist[] }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [message, setMessage] = React.useState("");

  async function handleMigration() {
    setIsLoading(true);

    try {
      await migration();

      setMessage("Migración completa");
    } catch (error: any) {
      setMessage(error.message);

      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Container className="flex flex-col gap-y-4">
      <Title order={3} align="left">
        Migrations
      </Title>

      <Container>
        <Button size="sm" onClick={handleMigration} loading={isLoading}>
          Migrar subscriptores
        </Button>
        <Text>{message}</Text>
      </Container>

      {artists.map((artist) => (
        <Container
          key={artist.id}
          className="border-gray-dark flex items-center justify-between border-b pb-2"
        >
          <Text>{artist.name}</Text>
        </Container>
      ))}
    </Container>
  );
}

export { MigrationsPageUI };
