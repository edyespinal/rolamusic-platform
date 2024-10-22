import React from "react";
import { Alert, Container, Text, Title, Underline } from "@rola/ui/components";
import { Artist, ArtistCommunity } from "@rola/services/schemas";

function ArtistCommunityPageUI({ artist }: { artist: Artist }) {
  return (
    <Container className="pb-24">
      <Container className="pb-12">
        <Title order={2} align="left">
          Mi Comunidad
        </Title>
        <Underline align="left" />
      </Container>

      {!artist.active && (
        <Container className="pb-8">
          <Alert variant="destructive" title="Artista inactivo">
            Este artista no está activo en la plataforma.
          </Alert>
        </Container>
      )}

      <Container>
        <Text>
          En esta sección puedes subir, actualizar y compartir contenido
          exclusivo con tu comunidad de fans en ROLA. Recuerda la importancia de
          mantener un vínculo cercano con tu seguidores para mantener viva la
          llama y las suscripciones.
        </Text>
      </Container>
    </Container>
  );
}

export { ArtistCommunityPageUI };
