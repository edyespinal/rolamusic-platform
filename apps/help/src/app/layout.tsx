import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { cn } from "@rola/tailwind-config/utils";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./styles/globals.css";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ROLA | Help",
  description: "Página de ayuda de ROLA",
};

type LayoutProps = {
  children: React.ReactNode;
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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
