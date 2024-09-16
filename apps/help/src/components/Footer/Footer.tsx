import React from "react";
import { Container, Icon } from "@rola/ui/components";
import Link from "next/link";

function Footer() {
  return (
    <footer className="border-brand border-t text-center lg:pt-0">
      <Container
        size="xl"
        className="flex flex-col items-center justify-between gap-4 px-8 lg:flex-row lg:px-0"
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

        <div className="hidden text-sm text-neutral-500 lg:block">
          Todos los derechos reservados &copy; {new Date().getFullYear()}
        </div>

        <div className="flex flex-col items-center gap-4 lg:flex-row">
          <Link href="/faq" className="text-brand hover:underline">
            Preguntas frecuentes
          </Link>
          <a
            href="mailto:hola@rolamusic.app"
            className="text-brand hover:underline"
          >
            Contacto
          </a>
          <div className="bg-brand flex gap-8 px-8 py-4 text-black">
            <a
              href="http://www.instagram.com/rolamusic.app/"
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="instagram" size={24} strokeWidth={2} />
            </a>
            <a
              href="http://www.youtube.com/@rolamusicapp"
              className="hover:text-white"
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
