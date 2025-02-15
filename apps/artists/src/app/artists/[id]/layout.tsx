import { Footer } from "@components/Footer/Footer";
import { Header } from "@components/Header/Header";
import { Container } from "@rola/ui/components";
import { LayoutProps } from "@typings/globals";
import { Sidebar } from "./_components/Sidebar/Sidebar";
import { db } from "@rola/services/firebase";

async function ArtistsLayout({
  children,
  params,
}: LayoutProps & { params: { id: string } }) {
  const { id } = params;
  const artist = await db.artists.getArtist(id);

  if (!artist) {
    throw new Error("Algo ha salido mal cargando el artista");
  }

  return (
    <Container
      size="xxl"
      className="grid h-svh grid-rows-[auto_1fr_auto] px-4 lg:px-4"
    >
      <Header />
      <Container size="full" className="flex h-full justify-between gap-x-16">
        <Container className="mt-12 w-96">
          <Sidebar artist={artist} />
        </Container>
        <Container size="full" className="mt-12">
          {children}
        </Container>
      </Container>
      <Footer />
    </Container>
  );
}

export default ArtistsLayout;
