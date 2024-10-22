import Link from "next/link";
import { SignedIn } from "@clerk/nextjs";
import { UserMenu } from "@components/UserMenu/UserMenu";
import { Button, Container, Logo } from "@rola/ui/components";
import { NavLink } from "./NavLink";

function Header() {
  return (
    <Container className="z-[99] flex h-20 items-center bg-gradient-to-b from-black to-transparent">
      <Container size="xl" className="flex items-center justify-between">
        <Link href="/">
          <Logo variant="horizontal" size="xs" />
        </Link>
        <div className="flex items-center justify-end gap-4">
          <Container className="hidden items-center gap-8 lg:flex">
            <NavLink href="/">Inicio</NavLink>
            <NavLink href="/artists">Artistas</NavLink>
            <NavLink href="/rola-talks">ROLA Talks</NavLink>
            <NavLink href="/artist-information">¿Eres artista?</NavLink>
            <Button size="xs">Iniciar sesión de artista</Button>
          </Container>
          <SignedIn>
            <UserMenu />
          </SignedIn>
        </div>
      </Container>
    </Container>
  );
}

export { Header };
