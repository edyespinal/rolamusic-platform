"use client";

import React from "react";
import Link from "next/link";
import { SignedOut, SignedIn, useUser } from "@clerk/nextjs";
import { NavLink } from "@components/Header/NavLink";
import { UserMenu } from "@components/UserMenu/UserMenu";
import { Container, Button } from "@rola/ui/components";
import { ArrowRightIcon } from "@rola/ui/icons";

function DesktopNavigation() {
  const { isSignedIn, user } = useUser();

  return (
    <Container className="hidden items-center gap-8 lg:flex">
      <NavLink href="/">Inicio</NavLink>
      <NavLink href="/artists" prefetch>
        Artistas
      </NavLink>
      <NavLink href="/rola-talks">ROLA Talks</NavLink>
      <NavLink href="/artist-information">¿Eres artista?</NavLink>
      <SignedOut>
        <a href={`${process.env.NEXT_PUBLIC_ARTISTS_APP}`}>
          <Button size="xs">
            Iniciar sesión de artista
            <ArrowRightIcon className="ml-2" />
          </Button>
        </a>
      </SignedOut>

      {isSignedIn && user?.publicMetadata.role !== "fan" && (
        <a href={`${process.env.NEXT_PUBLIC_ARTISTS_APP}`}>
          <Button size="xs">
            Ir a mi perfil de artista
            <ArrowRightIcon className="ml-2" />
          </Button>
        </a>
      )}

      <SignedOut>
        <Link href="/auth/sign-in">
          <Button variant="outline" size="xs">
            Iniciar sesión de fan
            <ArrowRightIcon className="ml-2" />
          </Button>
        </Link>
      </SignedOut>
      <SignedIn>
        <UserMenu />
      </SignedIn>
    </Container>
  );
}

export { DesktopNavigation };
