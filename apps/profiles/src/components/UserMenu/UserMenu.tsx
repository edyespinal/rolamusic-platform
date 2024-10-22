"use client";

import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Container,
  Icon,
  Loader,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Separator,
  Text,
} from "@rola/ui/components";
import { SignedIn, SignedOut, useClerk, useUser } from "@clerk/nextjs";
import Link from "next/link";

function UserMenu() {
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();

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
              <AvatarImage src={user?.imageUrl} alt={`${user?.fullName}`} />
              <AvatarFallback>
                <Text className="text-sm font-semibold">
                  {user?.firstName?.[0]}
                </Text>
              </AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent align="end" className="mt-4">
            <Container className="flex flex-col space-y-2 text-center">
              <Container className="flex items-center gap-2">
                <Icon name="circle-user" />
                Mi Perfil
              </Container>
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
