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
  Separator,
  Text,
  Title,
} from "@rola/ui/components";
import { SignedIn, SignedOut, useClerk, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { CircleUserIcon } from "@rola/ui/icons";

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
        )}
      </SignedIn>
    </React.Fragment>
  );
}

export { UserMenu };
