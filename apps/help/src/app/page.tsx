import { Container, Underline } from "@rola/ui/components";

export default function HomePage() {
  return (
    <Container className="pt-12 px-4 pb-24 lg:px-0">
      <div className="text-2xl text-center uppercase font-bold pb-8">
        <h1>Centro de Ayuda</h1>
        <Underline />
      </div>
      <div className="lg:text-center">
        <p className="mb-4">
          Si tienes preguntas o necesitas ayuda, puedes contactar con nuestro
          equipo al siguiente correo electrónico:
        </p>
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
