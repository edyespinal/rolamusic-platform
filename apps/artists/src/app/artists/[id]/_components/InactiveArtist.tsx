"use client";

import React from "react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Container,
  Icon,
  Text,
} from "@rola/ui/components";

function InactiveArtistAlert() {
  return (
    <Container className="pb-8">
      <Alert variant="destructive" title="Artista inactivo">
        <AlertTitle>Artista inactivo</AlertTitle>
        <AlertDescription className="flex items-center gap-2">
          <Icon name="alert-circle" />
          <Text>Este artista no está activo en la plataforma.</Text>
        </AlertDescription>
      </Alert>
    </Container>
  );
}

export { InactiveArtistAlert };
