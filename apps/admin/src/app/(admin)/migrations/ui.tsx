"use client";

import React from "react";
import { Button, Container, Text, Title } from "@rola/ui/components";
import { migration } from "./actions";

function MigrationsPageUI() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [message, setMessage] = React.useState("");

  async function handleMigration() {
    setIsLoading(true);

    try {
      await migration();

      setMessage("Hooray");
    } catch (error: any) {
      console.error(error.message);
      setMessage(error.message);
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
          Run migration
        </Button>
        <Text>{message}</Text>
      </Container>
    </Container>
  );
}

export { MigrationsPageUI };
