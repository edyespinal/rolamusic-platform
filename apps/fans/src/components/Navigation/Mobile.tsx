"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, SignOutButton } from "@clerk/nextjs";
import { NavLink } from "@components/Header/NavLink";
import {
  Button,
  Container,
  Logo,
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@rola/ui/components";
import MenuIcon from "@assets/img/icons/menu.svg";

function MobileNavigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Container className="flex gap-4 lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Image src={MenuIcon} alt="Menu" />
        </SheetTrigger>
        <SheetContent className="bg-brand z-[999] flex w-full flex-col justify-between py-16 text-black">
          <SheetTitle className="hidden">Menu</SheetTitle>

          <div className="-mt-14">
            <Logo variant="icon" size="xs" alt />
          </div>

          <div className="flex flex-col gap-4 text-center">
            <NavLink href="/" onClick={() => setIsOpen(false)}>
              Inicio
            </NavLink>
            <NavLink href="/artists" onClick={() => setIsOpen(false)}>
              Artistas
            </NavLink>
            <NavLink href="/rola-talks" onClick={() => setIsOpen(false)}>
              ROLA Talks
            </NavLink>
            <NavLink
              href="/artist-information"
              onClick={() => setIsOpen(false)}
            >
              ¿Eres artista?
            </NavLink>
          </div>

          <div className="mt-4 flex flex-col items-center gap-2">
            <a
              href={process.env.NEXT_PUBLIC_ARTISTS_APP}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary">
                <SignedIn>Ir a mi perfil de artista</SignedIn>
                <SignedOut>Iniciar sesión de artista</SignedOut>
              </Button>
            </a>

            <SignedOut>
              <Link href="/auth/sign-in" onClick={() => setIsOpen(false)}>
                <Button variant="outlineAlt">Iniciar sesión de fan</Button>
              </Link>
            </SignedOut>

            <SignedIn>
              <a href={`${process.env.NEXT_PUBLIC_PROFILES_APP}`}>
                <Button variant="secondary">Ir a mi cuenta</Button>
              </a>
              <SignOutButton>
                <Button variant="outlineAlt">Cerrar sesión</Button>
              </SignOutButton>
            </SignedIn>
          </div>

          <div className="mt-4 flex flex-col items-center gap-6 font-semibold">
            <a
              href="https://help.rolamusic.app/legal-notice"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aviso legal
            </a>
            <span className="hidden lg:block">|</span>
            <a
              href="https://help.rolamusic.app/privacy-policy"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Política de privacidad
            </a>
            <span className="hidden lg:block">|</span>
            <a
              href="https://help.rolamusic.app/cookies-policy"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Política de cookies
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </Container>
  );
}

export { MobileNavigation };
