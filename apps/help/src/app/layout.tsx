import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { cn } from "@rola/tailwind-config/utils";
import { Header } from "@components/Header/Header";
import { Footer } from "@components/Footer/Footer";
import { LayoutProps } from "@typings/globals";
import { Container } from "@rola/ui/components";
import "@styles/globals.css";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ROLA | Help",
  description: "Página de ayuda de ROLA",
};

function RootLayout(props: Readonly<LayoutProps>) {
  const { children } = props;

  return (
    <html lang="es">
      <body
        className={cn(
          "grid h-[100dvh] grid-rows-[auto_1fr_auto]",
          font.className
        )}
      >
        <Header />
        <Container size="md">
          {children}
          <Analytics />
        </Container>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
