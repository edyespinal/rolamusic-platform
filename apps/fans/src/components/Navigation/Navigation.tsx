"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import {
  Button,
  Container,
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@rola/ui/components";
import { ArrowRightIcon } from "@rola/ui/icons";
import { NavLink } from "@components/Header/NavLink";
import { UserMenu } from "@components/UserMenu/UserMenu";
import MenuIcon from "@assets/img/icons/menu.svg";

function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="items-center justify-end gap-4">
      <Container className="hidden items-center gap-8 lg:flex">
        <NavLink href="/">Inicio</NavLink>
        <NavLink href="/artists" prefetch>
          Artistas
        </NavLink>
        <NavLink href="/rola-talks">ROLA Talks</NavLink>
        <NavLink href="/artist-information">¿Eres artista?</NavLink>
        <a
          href="https://artists.rolamusic.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="xs">
            Iniciar sesión de artista
            <ArrowRightIcon className="ml-2" />
          </Button>
        </a>
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

      <Container className="flex items-center gap-4 lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger>
            <Image src={MenuIcon} alt="Menu" />
          </SheetTrigger>
          <SheetContent className="z-[999] py-16">
            <SheetTitle className="hidden">Menu</SheetTitle>
            <div className="flex h-full flex-col justify-center gap-4 text-center">
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
            <SignedOut>
              <Link href="/auth/sign-in" onClick={() => setIsOpen(false)}>
                <Button variant="outline" size="xs">
                  Iniciar sesión de fan
                  <ArrowRightIcon className="ml-2" />
                </Button>
              </Link>
            </SignedOut>
            <SignedIn>
              <UserMenu withInfo />
            </SignedIn>
          </SheetContent>
        </Sheet>
      </Container>
    </div>
  );
}

export { Navigation };
