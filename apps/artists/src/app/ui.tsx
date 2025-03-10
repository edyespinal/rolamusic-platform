import Link from "next/link";
import { Footer } from "@components/Footer/Footer";
import { Header } from "@components/Header/Header";
import { Button, Container, Text, Title, Underline } from "@rola/ui/components";
import { Artist } from "@rola/services/schemas";
import { ArtistCard } from "@components/ArtistCard/ArtistCard";
import React from "react";

function HomePageUI({ artists }: { artists: Artist[] }) {
  return (
    <Container size="xl" className="grid h-svh grid-rows-[auto_1fr_auto]">
      <Header />
      <Container size="full" className="h-full py-12">
        {artists.length === 0 && (
          <React.Fragment>
            <Container className="mb-8">
              <Title order={2}>Crea el perfil de tu artista</Title>
              <Underline />
            </Container>
            <Container className="mx-auto text-center">
              <Text>
                Aún no tienes artistas vinculados a tu cuenta. <br />
                Crea un nuevo artista para que puedas publicarlo en la
                plataforma.
              </Text>
            </Container>
          </React.Fragment>
        )}

        {artists.length > 0 && (
          <React.Fragment>
            <Container className="mb-8">
              <Title order={2}>Mis artistas</Title>
              <Underline />
            </Container>
            <Container size="full" className="mx-auto text-center">
              <Text>Selecciona el artista que deseas editar</Text>

              <Container
                size="lg"
                className="flex flex-wrap justify-center gap-8 pt-8"
              >
                {artists.map((artist) => (
                  <ArtistCard key={artist.id} artist={artist} />
                ))}
              </Container>
            </Container>
          </React.Fragment>
        )}

        <Container className="mt-24 text-center">
          <Link href="/artists/new">
            <Button>Crear artista</Button>
          </Link>
        </Container>
      </Container>
      <Footer />
    </Container>
  );
}

export { HomePageUI };
