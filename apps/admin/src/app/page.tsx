import Link from "next/link";

import { Button, Container, Title, Underline } from "@rola/ui/components";
import { Header } from "@components/Header";

function HomePage() {
  return (
    <Container size="lg">
      <Header />
      <Container size="sm" className="text-center py-24">
        <div className="pb-12">
          <Title order={4} className="uppercase">
            Admin Dashboard
          </Title>
          <Underline />
        </div>

        <div className="flex flex-col gap-4">
          <Link href="/artists">
            <Button size="lg" full>
              Artistas
            </Button>
          </Link>
          <Link href="/podcast-guests">
            <Button size="lg" full>
              Invitados ROLA Talks
            </Button>
          </Link>
        </div>
      </Container>
    </Container>
  );
}

export default HomePage;
