import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { Container } from "@rola/ui/components";
import { LayoutProps } from "@typings/globals";

function ArtistsLayout({ children }: LayoutProps) {
  return (
    <Container size="xl" className="h-svh grid grid-rows-[auto_1fr_auto]">
      <Header />
      <Container size="full" className="py-12">
        {children}
      </Container>
      <Footer />
    </Container>
  );
}

export default ArtistsLayout;
