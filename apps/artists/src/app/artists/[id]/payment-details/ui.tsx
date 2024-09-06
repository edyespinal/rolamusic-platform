"use client";

import { Artist, ArtistPayment } from "@rola/services/schemas";
import {
  Alert,
  Button,
  Container,
  Form,
  RadioGroup,
  Text,
  Title,
  Underline,
} from "@rola/ui/components";
import { useArtistPaymentDetailsData } from "./data";

function ArtistPaymentDetailsUI({
  artist,
  payment,
}: {
  artist: Artist;
  payment: ArtistPayment;
}) {
  const { form, handleSubmit, isLoading } =
    useArtistPaymentDetailsData(payment);

  // eslint-disable-next-line no-console
  console.log({ artist, payment });

  return (
    <Container className="pb-24">
      <Container className="pb-12">
        <Title order={2} align="left">
          Datos bancarios y fiscales
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

      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="py-12
      "
      >
        <Form {...form}>
          <Text>
            Introduce tus datos fiscales, datos bancarios ya que son necesarios
            para recibir tus pagos.
          </Text>

          <Title
            order={5}
            align="left"
            className="text-brand uppercase font-semibold mb-4"
          >
            Datos Fiscales
          </Title>

          <Text>
            Mi cuenta es de: <span className="text-red-700">*</span>
          </Text>

          <RadioGroup></RadioGroup>

          <Container className="text-center mt-12">
            <Button type="submit" loading={isLoading}>
              Actualizar
            </Button>
          </Container>
        </Form>
      </form>
    </Container>
  );
}

export { ArtistPaymentDetailsUI };
