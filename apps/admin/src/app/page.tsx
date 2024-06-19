import Link from "next/link";

import { Button, Container, Underline } from "@rola/ui/components";

import { Header } from "./components/Header";

function HomePage() {
  return (
    <Container size="lg">
      <Header />

      <main className="text-center">
        <div className="pb-12">
          <h1 className="uppercase text-xl font-semibold">Admin Dashboard</h1>
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
      </main>
    </Container>
  );
}

export default HomePage;
