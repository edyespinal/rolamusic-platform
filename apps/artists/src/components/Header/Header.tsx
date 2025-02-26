import { SignedIn } from "@clerk/nextjs";
import { UserMenu } from "@components/UserMenu/UserMenu";
import { Button, Container, Logo } from "@rola/ui/components";

function Header() {
  return (
    <Container size="xxl" className="flex items-center justify-between py-4">
      <a href={`${process.env.NEXT_PUBLIC_FANS_APP}`}>
        <Logo variant="horizontal" size="xs" />
      </a>

      <div className="flex items-center gap-6">
        <a href={`${process.env.NEXT_PUBLIC_FANS_APP}`}>
          <Button variant="outline" size="sm">
            Ir a la app
          </Button>
        </a>
        <SignedIn>
          <UserMenu />
        </SignedIn>
      </div>
    </Container>
  );
}

export { Header };
