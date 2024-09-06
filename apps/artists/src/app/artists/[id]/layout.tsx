import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { Container } from "@rola/ui/components";
import { LayoutProps } from "@typings/globals";
import { Sidebar } from "./_components/Sidebar/Sidebar";
import { services } from "@rola/services/firebase";

async function ArtistsLayout({
  children,
  params,
}: LayoutProps & { params: { id: string } }) {
  const { id } = params;
  const artist = await services.getArtist(id);

  return (
    <Container size="xl" className="h-svh grid grid-rows-[auto_1fr_auto]">
      <Header />
      <Container size="full" className="h-full flex justify-between gap-x-16">
        <Container className="w-96 mt-12">
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
