import { Container, Icon } from "@rola/ui/components";
import Link from "next/link";

function Footer() {
  return (
    <footer className="border-t border-brand text-center lg:pt-0">
      <Container
        size="xl"
        className="flex flex-col justify-between items-center gap-4 px-8 lg:flex-row lg:px-0"
      >
        <div className="flex flex-col gap-4 lg:flex-row">
          <Link href="/legal-notice" className="hover:underline">
            Aviso legal
          </Link>
          <Link href="/privacy-policy" className="hover:underline">
            Política de privacidad
          </Link>
          <Link href="/cookies-policy" className="hover:underline">
            Política de cookies
          </Link>
        </div>

        <div className="hidden text-neutral-500 text-sm lg:block ">
          Todos los derechos reservados &copy; {new Date().getFullYear()}
        </div>

        <div className="flex flex-col gap-4 items-center lg:flex-row">
          <Link href="/faq" className="text-brand hover:underline">
            Preguntas frecuentes
          </Link>
          <a
            href="mailto:hola@rolamusic.app"
            className="text-brand hover:underline"
          >
            Contacto
          </a>
          <div className="flex bg-brand px-8 py-4 gap-8">
            <a
              href="http://www.instagram.com/rolamusic.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="instagram" size={24} strokeWidth={2} />
            </a>
            <a
              href="http://www.youtube.com/@rolamusicapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="youtube" size={24} strokeWidth={2} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export { Footer };
