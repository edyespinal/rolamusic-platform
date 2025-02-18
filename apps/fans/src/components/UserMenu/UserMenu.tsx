"use client";

import React from "react";
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
  Text,
  Title,
} from "@rola/ui/components";
import { SignedIn, SignedOut, useClerk, useUser } from "@clerk/nextjs";
import Link from "next/link";

function UserMenu({ withInfo = false }: { withInfo?: boolean }) {
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();

  function handleSignOut() {
    signOut({
      redirectUrl: window.location.pathname || "/",
    });
  }

  if (!isLoaded) {
    return <Loader />;
  }

  return (
    <React.Fragment>
      <SignedOut>
        <Link href="/auth/sign-in">
          <Button size="xs" variant="outline">
            Iniciar sesión
          </Button>
        </Link>
      </SignedOut>

      <SignedIn>
        {withInfo ? (
          <Container className="flex gap-2">
            <Avatar className="size-8">
              <AvatarImage src={user?.imageUrl} alt={`${user?.fullName}`} />
              <AvatarFallback>
                <Title order={1}>{user?.firstName?.[0]}</Title>
              </AvatarFallback>
            </Avatar>
            <Text>{user?.fullName}</Text>
          </Container>
        ) : (
          <Popover>
            <PopoverTrigger>
              <Avatar className="mx-auto size-8">
                <AvatarImage src={user?.imageUrl} alt={`${user?.fullName}`} />
                <AvatarFallback>
                  <Title order={1}>{user?.firstName?.[0]}</Title>
                </AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent align="end" className="mt-4">
              <Container className="text-center">
                <Button size="sm" onClick={handleSignOut}>
                  Cerrar sesión
                </Button>
              </Container>
            </PopoverContent>
          </Popover>
        )}
      </SignedIn>
    </React.Fragment>
  );
}

export { UserMenu };
