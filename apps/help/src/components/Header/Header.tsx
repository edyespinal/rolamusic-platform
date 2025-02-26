import React from "react";
import { Button, Container, Logo } from "@rola/ui/components";

function Header() {
  return (
    <Container
      as="header"
      size="lg"
      className="flex items-center justify-between px-4 py-4 lg:px-0"
    >
      <a href={`${process.env.NEXT_PUBLIC_FANS_APP}`}>
        <Logo variant="horizontal" size="xs" />
      </a>
      <a href={`${process.env.NEXT_PUBLIC_FANS_APP}`}>
        <Button variant="outline" size="sm">
          Ir a la app
        </Button>
      </a>
    </Container>
  );
}

export { Header };
