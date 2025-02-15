import Link from "next/link";
import { SignedIn } from "@clerk/nextjs";
import { UserMenu } from "@components/UserMenu/UserMenu";
import { Container, Logo } from "@rola/ui/components";

function Header() {
  return (
    <Container size="xxl" className="flex items-center justify-between py-4">
      <Link href="/">
        <Logo variant="horizontal" size="xs" />
      </Link>
      <SignedIn>
        <UserMenu />
      </SignedIn>
    </Container>
  );
}

export { Header };
