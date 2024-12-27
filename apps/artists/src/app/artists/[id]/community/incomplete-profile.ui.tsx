import React from "react";
import { Container, Text, Title } from "@rola/ui/components";

function IncompleteProfileUI({ missingData = "tu perfil" }) {
  return (
    <Container>
      <Title order={2} underline align="left">
        Falta información
      </Title>
      <Text className="pt-4">
        Necesitamos un poco más de información. Completa
        <span className="text-brand font-semibold">{` ${missingData} `}</span>
        para poder configurar tu comunidad.
      </Text>
    </Container>
  );
}

export { IncompleteProfileUI };
