import { Container, Text, Title, Underline } from "@rola/ui/components";

export default function HomePage() {
  return (
    <Container size="sm" className="pt-12 px-4 pb-24 lg:px-0">
      <div className="text-2xl text-center uppercase font-bold pb-8">
        <Title order={3}>Centro de Ayuda</Title>
        <Underline />
      </div>
      <div className="lg:text-center">
        <Text className="mb-4">
          Si tienes preguntas o necesitas ayuda, puedes contactar con nuestro
          equipo al siguiente correo electrónico:
        </Text>
        <a
          href="mailto:hola@rolamusic.app"
          className="text-brand hover:underline"
        >
          hola@rolamusic.app
        </a>
      </div>
    </Container>
  );
}
