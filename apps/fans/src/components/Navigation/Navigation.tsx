"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, SignOutButton, useUser } from "@clerk/nextjs";
import {
  Button,
  Container,
  Logo,
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
  const { user, isSignedIn } = useUser();

  return (
    <div className="items-center justify-end gap-4">
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
              <Link href="/auth/sign-in" onClick={() => setIsOpen(false)}>
                <Button variant="outlineAlt">Iniciar sesión de fan</Button>
              </Link>

              <SignedIn>
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
    </div>
  );
}

export { Navigation };
