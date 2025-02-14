import React from "react";
import { Alert, Container, Text, Title, Underline } from "@rola/ui/components";
import { Artist, ArtistCommunity } from "@rola/services/schemas";
import Stripe from "stripe";

function ArtistCommunityPageUI({
  artist,
  community,
  balance,
}: {
  artist: Artist;
  community: ArtistCommunity | null;
  balance: Stripe.Balance;
}) {
  return (
    <Container className="pb-24">
      {!artist.active && (
        <Container className="pb-8">
          <Alert variant="destructive" title="Artista inactivo">
            Este artista no está activo en la plataforma.
          </Alert>
        </Container>
      )}

      <Container className="pb-12">
        <Title order={2} align="left">
          Mi Comunidad
        </Title>
        <Underline align="left" />
      </Container>

      <Container>
        <Text>
          En esta sección puedes subir, actualizar y compartir contenido
          exclusivo con tu comunidad de fans en ROLA. Recuerda la importancia de
          mantener un vínculo cercano con tu seguidores para mantener viva la
          llama y las suscripciones.
        </Text>
      </Container>
      <Container className="flex gap-4 pt-8">
        <div className="bg-background min-w-64 rounded p-4">
          <Title order={4} align="left">
            Subscriptores
          </Title>
          <Title className="text-brand" align="left">
            {community?.totalSubscribers ?? 0}
          </Title>
        </div>
        <div className="bg-background min-w-64 rounded p-4">
          <Title order={4} align="left">
            Balance
          </Title>
          <Title className="text-brand" align="left">
            {balance.available[0]?.amount ?? 0} {balance.available[0]?.currency}
          </Title>
        </div>
      </Container>
    </Container>
  );
}

export { ArtistCommunityPageUI };
