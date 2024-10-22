"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Container,
  Text,
  Title,
} from "@rola/ui/components";
import React from "react";
import { Artist } from "@rola/services/schemas";
import { SidebarLink } from "./SidebarLink";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Sidebar({ artist }: { artist: Artist }) {
  const pathname = usePathname();

  return (
    <React.Fragment>
      <Container className="space-y-2 pb-8 text-center">
        <Avatar className="mx-auto size-32">
          <AvatarImage src={artist?.profileURL} alt={`${artist.name}`} />
          <AvatarFallback>
            <Title order={1}>{artist.name[0]}</Title>
          </AvatarFallback>
        </Avatar>
        <Text className="font-semibold">{artist.name}</Text>
        <Link href="/">
          <Button size="sm">Gestionar otro artista</Button>
        </Link>
      </Container>

      <Container className="mb-12">
        <Container className="mb-8">
          <Text className="bg-brand mb-2 px-2 font-bold uppercase text-neutral-900">
            Menú del artista
          </Text>
          <Container className="flex flex-col space-y-2">
            <SidebarLink href={`/artists/${artist?.id}`} pathname={pathname}>
              Información de la cuenta
            </SidebarLink>
            <SidebarLink
              href={`/artists/${artist?.id}/payment-details`}
              pathname={pathname}
            >
              Datos bancarios y fiscales
            </SidebarLink>
          </Container>
        </Container>

        {/*  <Container>
          <Text className="bg-brand mb-2 px-2 font-bold uppercase text-neutral-900">
            Gestionar mi comunidad
          </Text>
          <Container className="flex flex-col space-y-2">
            <SidebarLink
              href={`/artists/${artist?.id}/community`}
              pathname={pathname}
            >
              Mi Comunidad
            </SidebarLink>
          </Container>
        </Container> */}
      </Container>
    </React.Fragment>
  );
}

export { Sidebar };
