import Link from "next/link";

import { Container } from "../Container";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { Logo } from "@rola/ui/components";

function Header() {
  return (
    <Container className="py-4">
      <header className="flex items-center justify-between">
        <Link href="/">
          <Logo variant="horizontal" />
        </Link>
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>
      </header>
    </Container>
  );
}

export { Header };
