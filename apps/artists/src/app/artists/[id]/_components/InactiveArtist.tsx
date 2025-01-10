"use client";

import React from "react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Container,
  Text,
} from "@rola/ui/components";
import { AlertCircleIcon } from "@rola/ui/icons";

function InactiveArtistAlert() {
  return (
    <Container className="pb-8">
      <Alert variant="destructive" title="Artista inactivo">
        <AlertTitle>Artista inactivo</AlertTitle>
        <AlertDescription className="flex items-center gap-2">
          <AlertCircleIcon />
          <Text>Este artista no está activo en la plataforma.</Text>
        </AlertDescription>
      </Alert>
    </Container>
  );
}

export { InactiveArtistAlert };
