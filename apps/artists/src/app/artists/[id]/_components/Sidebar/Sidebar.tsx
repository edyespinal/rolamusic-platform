"use client";

import React from "react";
import Link from "next/link";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Container,
  Text,
  Title,
} from "@rola/ui/components";
import { usePathname } from "next/navigation";
import { SidebarLink } from "./SidebarLink";
import { Artist } from "@rola/services/schemas";

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
          <Button size="sm">Gestionar mis artistas</Button>
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

        <Container>
          <Text className="bg-brand mb-2 px-2 font-bold uppercase text-neutral-900">
            Comunidad
          </Text>
          <Container className="flex flex-col space-y-2">
            <SidebarLink
              href={`/artists/${artist?.id}/community`}
              pathname={pathname}
            >
              Mi Comunidad
            </SidebarLink>
            <SidebarLink
              href={`/artists/${artist?.id}/community/posts`}
              pathname={pathname}
            >
              Mi contenido
            </SidebarLink>
            <SidebarLink
              href={`/artists/${artist?.id}/community/configuration`}
              pathname={pathname}
            >
              Configuración
            </SidebarLink>
          </Container>
        </Container>
      </Container>
    </React.Fragment>
  );
}

export { Sidebar };
