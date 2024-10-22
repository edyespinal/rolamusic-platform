import { Footer } from "@components/Footer/Footer";
import { Header } from "@components/Header/Header";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Container,
  Icon,
  Text,
} from "@rola/ui/components";
import { LayoutProps } from "@typings/globals";
import { Sidebar } from "./_components/Sidebar/Sidebar";
import { db } from "@rola/services/firebase";
import { redirect } from "next/navigation";

async function ArtistsLayout({
  children,
  params,
}: LayoutProps & { params: { id: string } }) {
  const { id } = params;
  const artist = await db.artists.getArtist(id);

  if (!artist) {
    return redirect("/404");
  }

  return (
    <Container
      size="xl"
      className="grid h-svh grid-rows-[auto_1fr_auto] px-4 lg:px-4"
    >
      <Header />
      <Container size="full" className="flex h-full justify-between gap-x-16">
        <Container className="mt-12 w-96">
          <Sidebar artist={artist} />
        </Container>
        <Container size="full" className="mt-12">
          {!artist.active && (
            <Container className="pb-8">
              <Alert variant="destructive" title="Artista inactivo">
                <AlertTitle>Artista inactivo</AlertTitle>
                <AlertDescription className="flex items-center gap-2">
                  <Icon name="alert-circle" />
                  <Text>Este artista no está activo en la plataforma.</Text>
                </AlertDescription>
              </Alert>
            </Container>
          )}
          {children}
        </Container>
      </Container>
      <Footer />
    </Container>
  );
}

export default ArtistsLayout;
