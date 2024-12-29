import React from "react";
import { Container, Text, Title } from "@rola/ui/components";
import Link from "next/link";

function IncompleteProfileUI({
  link,
}: {
  link: {
    href: string;
    text: string;
  };
}) {
  return (
    <Container>
      <Title order={2} underline align="left">
        Falta información
      </Title>
      <Text className="pt-4">
        Necesitamos un poco más de información. Completa
        <Link href={link.href} className="text-brand font-semibold">
          {` ${link.text} `}
        </Link>
        para poder configurar tu comunidad.
      </Text>
    </Container>
  );
}

export { IncompleteProfileUI };
