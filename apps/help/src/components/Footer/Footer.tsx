import React from "react";
import Link from "next/link";
import { Container } from "@rola/ui/components";
import { InstagramIcon, YouTubeIcon } from "@rola/ui/icons";

function Footer() {
  return (
    <footer className="border-brand border-t text-center lg:pt-0">
      <Container
        size="lg"
        className="flex flex-col items-center justify-between gap-4 px-8 lg:flex-row lg:px-0"
      >
        <div className="flex flex-col gap-3 text-sm lg:flex-row">
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

        <div className="hidden text-xs text-neutral-500 lg:block">
          Todos los derechos <br />
          reservados &copy; {new Date().getFullYear()}
        </div>

        <div className="flex flex-col items-center gap-3 text-sm lg:flex-row">
          <Link href="/faq" className="text-brand hover:underline">
            Preguntas frecuentes
          </Link>
          <a
            href="mailto:hola@rolamusic.app"
            className="text-brand hover:underline"
          >
            Contacto
          </a>
          <div className="bg-brand flex gap-6 px-6 py-4 text-black">
            <a
              href="http://www.instagram.com/rolamusic.app/"
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon size={24} strokeWidth={2} />
            </a>
            <a
              href="http://www.youtube.com/@rolamusicapp"
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeIcon size={26} strokeWidth={2} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export { Footer };
