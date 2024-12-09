import Link from "next/link";
import { Container, Logo } from "@rola/ui/components";
import { Navigation } from "@components/Navigation/Navigation";

function Header() {
  return (
    <Container className="bg-background-dark z-[99] flex h-20 items-center lg:bg-transparent lg:bg-gradient-to-b lg:from-black lg:to-transparent lg:shadow-none">
      <Container
        size="lg"
        className="flex items-center justify-between px-4 lg:px-0"
      >
        <Link href="/">
          <div className="hidden lg:block">
            <Logo variant="horizontal" size="xs" />
          </div>
          <div className="block lg:hidden">
            <Logo variant="icon" size="xs" />
          </div>
        </Link>
        <Navigation />
      </Container>
    </Container>
  );
}

export { Header };
