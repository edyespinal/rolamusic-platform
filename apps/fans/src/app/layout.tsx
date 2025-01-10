import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Provider as JotaiProvider } from "jotai";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@rola/ui/components";
import { cn } from "@rola/tailwind-config/utils";
import { LayoutProps } from "../typings/globals";
import { Header } from "@components/Header/Header";
import { Footer } from "@components/Footer/Footer";
import "../styles/globals.css";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ROLA | Fans - Apoya a tus artistas independientes favoritos",
  description: "ROLA - Apoya a tus artistas independientes favoritos",
};

export default function RootLayout({ children }: Readonly<LayoutProps>) {
  return (
    <ClerkProvider>
      <html lang="es">
        <body
          className={cn("grid h-svh grid-rows-[auto_1fr_auto]", font.className)}
        >
          <JotaiProvider>
            <Header />
            {children}
            <Analytics />
            <Footer />
          </JotaiProvider>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
