import { Container, Logo } from "@rola/ui/components";
import Link from "next/link";

function Header() {
  return (
    <nav className="py-4 px-4 lg:px-0">
      <Container size="xl">
        <Link href="/">
          <Logo variant="horizontal" />
        </Link>
      </Container>
    </nav>
  );
}

export { Header };
