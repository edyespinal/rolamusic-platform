"use client";

import React from "react";
import Link from "next/link";
import { SignedIn, SignedOut, useClerk, useUser } from "@clerk/nextjs";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Container,
  Loader,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Separator,
  Title,
} from "@rola/ui/components";
import { CircleUserIcon } from "@rola/ui/icons";

function UserMenu() {
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();

  const params = new URLSearchParams();
  params.set("quality", "85");
  params.set("width", "32");
  params.set("height", "32");

  const imageUrl = user?.imageUrl
    ? `${user?.imageUrl}?${params.toString()}`
    : "";

  function handleSignOut() {
    signOut({
      redirectUrl: "/auth/sign-in",
    });
  }

  if (!isLoaded) {
    return <Loader />;
  }

  return (
    <React.Fragment>
      <SignedOut>
        <Link href="/auth/sign-in">
          <Button size="sm">Iniciar sesión</Button>
        </Link>
      </SignedOut>

      <SignedIn>
        <Popover>
          <PopoverTrigger>
            <Avatar className="mx-auto size-8">
              <AvatarImage src={imageUrl} alt={`${user?.fullName}`} />
              <AvatarFallback>
                <Title order={1}>{user?.firstName?.[0]}</Title>
              </AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent align="end" className="mt-4">
            <Container className="flex flex-col space-y-2 text-center">
              <a
                href={`${process.env.NEXT_PUBLIC_PROFILES_APP}`}
                className="flex items-center gap-2"
              >
                <CircleUserIcon />
                Mi Perfil
              </a>
              <Separator />
              <Button size="sm" onClick={handleSignOut}>
                Cerrar sesión
              </Button>
            </Container>
          </PopoverContent>
        </Popover>
      </SignedIn>
    </React.Fragment>
  );
}

export { UserMenu };
