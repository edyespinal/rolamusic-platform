import { UserButton } from "@clerk/nextjs";
import { Container, Logo } from "@rola/ui/components";
import Link from "next/link";

// type HeaderProps = {
//   withoutNavigation?: boolean;
// };

function Header() {
  return (
    <Container size="xl" className="flex justify-between items-center py-4">
      <Link href="/">
        <Logo variant="horizontal" size="sm" />
      </Link>
      <UserButton />
    </Container>
  );
}

export { Header };
