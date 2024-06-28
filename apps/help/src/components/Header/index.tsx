import { Container, Logo } from "@rola/ui/components";
import Link from "next/link";

function Header() {
  return (
    <Container as="header" size="xl" className="py-4 px-4 lg:px-0">
      <Link href="/">
        <Logo variant="horizontal" />
      </Link>
    </Container>
  );
}

export { Header };
