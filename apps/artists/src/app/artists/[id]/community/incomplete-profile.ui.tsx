import React from "react";
import Link from "next/link";
import { Container, Text, Title } from "@rola/ui/components";

function IncompleteProfileUI({
  info,
}: {
  info: {
    href: string;
    missing: string;
  };
}) {
  return (
    <Container>
      <Title order={2} underline align="left">
        Falta información
      </Title>
      <Text className="pt-4">
        Necesitamos un poco más de información. Completa
        <Link href={info.href} className="text-brand font-semibold">
          {` ${info.missing} `}
        </Link>
        para poder configurar tu comunidad.
      </Text>
    </Container>
  );
}

export { IncompleteProfileUI };
