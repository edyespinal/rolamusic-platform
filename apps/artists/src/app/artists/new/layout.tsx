import { Footer } from "@components/Footer/Footer";
import { Header } from "@components/Header/Header";
import { Container } from "@rola/ui/components";
import { LayoutProps } from "@typings/globals";

function ArtistsLayout({ children }: LayoutProps) {
  return (
    <Container size="xl" className="grid h-svh grid-rows-[auto_1fr_auto]">
      <Header />
      <Container size="full" className="py-12">
        {children}
      </Container>
      <Footer />
    </Container>
  );
}

export default ArtistsLayout;
