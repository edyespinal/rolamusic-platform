import { Container, Icon } from "@rola/ui/components";

function Footer() {
  return (
    <Container
      size="xl"
      className="flex w-full flex-col justify-between border-t border-brand p-0 text-sm lg:flex-row"
    >
      <div className="flex flex-col gap-4 pt-2 text-center lg:flex-row">
        <a
          href="https://help.rolamusic.app/legal-notice"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aviso legal
        </a>
        <span className="hidden lg:block">|</span>
        <a
          href="https://help.rolamusic.app/privacy-policy"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Política de privacidad
        </a>
        <span className="hidden lg:block">|</span>
        <a
          href="https://help.rolamusic.app/cookies-policy"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Política de cookies
        </a>
      </div>

      <div className="hidden pt-2 font-thin lg:block">
        Todos los derechos reservados - ROLA &reg; {new Date().getFullYear()}
      </div>

      <div className="mt-2 w-full text-center lg:mt-0 lg:w-auto">
        <div className="lg:flex lg:justify-between">
          <div className="mb-4 mt-2 flex w-full flex-col justify-center gap-4 px-2 font-medium text-brand lg:flex-row">
            <a
              href="https://help.rolamusic.app/faq"
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Preguntas frecuentes
            </a>
            <span className="hidden lg:block">|</span>
            <a href="mailto:hola@rolamusic.app" className="hover:text-white">
              Contacto
            </a>
          </div>

          <div className="mx-auto flex max-w-[30%] items-center justify-center gap-4 bg-brand px-4 py-2 text-xl text-neutral-900">
            <a
              href="https://www.instagram.com/rolamusic.app"
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hidden">Síguenos en Facebook</span>
              <Icon name="instagram" size={21} />
            </a>

            <a
              href="https://www.youtube.com/@rolamusicapp"
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hidden">Suscríbete a nuestro canal YouTube</span>
              <Icon name="youtube" size={26} />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}

export { Footer };
