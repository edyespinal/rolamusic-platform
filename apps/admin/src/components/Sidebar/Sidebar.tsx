"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@rola/tailwind-config/utils";
import { Container, Title } from "@rola/ui/components";

function Sidebar() {
  const pathname = usePathname();
  const selected = "bg-brand text-black font-semibold";

  return (
    <Container as="nav" className="flex flex-col gap-4">
      <Link
        href="/artists"
        className={cn("px-4 py-1", pathname.includes("/artists") && selected)}
      >
        <Title order={5} align="left">
          Artistas
        </Title>
      </Link>
      <Link
        href="/podcast/guests"
        className={cn("px-4 py-1", pathname === "/podcast/guests" && selected)}
      >
        <Title order={5} align="left">
          ROLA Talks - Invitados
        </Title>
      </Link>
      <Link
        href="/podcast/episodes"
        className={cn(
          "px-4 py-1",
          pathname === "/podcast/episodes" && selected
        )}
      >
        <Title order={5} align="left">
          ROLA Talks - Episodios
        </Title>
      </Link>
      <Link
        href="/podcast/episodes/new"
        className={cn(
          "px-4 py-1",
          pathname === "/podcast/episodes/new" && selected
        )}
      >
        <Title order={5} align="left">
          ROLA Talks - Nuevo episodio
        </Title>
      </Link>
    </Container>
  );
}

export { Sidebar };
