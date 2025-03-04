"use client";

import React from "react";
import { SignedIn } from "@clerk/nextjs";
import { UserMenu } from "@components/UserMenu/UserMenu";
import { Button, Container } from "@rola/ui/components";

function DesktopNavigation() {
  return (
    <Container className="hidden items-center gap-8 lg:flex">
      <a href={`${process.env.NEXT_PUBLIC_FANS_APP}`}>
        <Button variant="outline" size="xs">
          Ir a la app
        </Button>
      </a>

      <SignedIn>
        <UserMenu />
      </SignedIn>
    </Container>
  );
}

export { DesktopNavigation };
