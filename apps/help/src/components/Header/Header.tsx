import React from "react";
import { Container, Logo } from "@rola/ui/components";
import Link from "next/link";

function Header() {
  return (
    <Container as="header" size="xl" className="px-4 py-4 lg:px-0">
      <Link href="/">
        <Logo variant="horizontal" size="xs" />
      </Link>
    </Container>
  );
}

export { Header };
