import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";

import { Container, Logo } from "@rola/ui/components";

function Header() {
  return (
    <Container
      as="header"
      size="xl"
      className="flex items-center justify-between py-4"
    >
      <Link href="/">
        <Logo variant="horizontal" size="xs" />
      </Link>
      <SignedIn>
        <UserButton afterSignOutUrl="/sign-in" />
      </SignedIn>
    </Container>
  );
}

export { Header };
