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
        className={cn("py-1 px-4", pathname.includes("/artists") && selected)}
      >
        <Title order={5} align="left">
          Artistas
        </Title>
      </Link>
      <Link
        href="/podcast-guests"
        className={cn("py-1 px-4", pathname === "/podcast-guests" && selected)}
      >
        <Title order={5} align="left">
          ROLA Talks
        </Title>
      </Link>
    </Container>
  );
}

export { Sidebar };
