import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@rola/tailwind-config/utils";
import { Container, Toaster } from "@rola/ui/components";
import { Header } from "@components/Header/Header";
import { Footer } from "@components/Footer/Footer";
import "@styles/globals.css";

const fonts = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ROLA | Perfiles",
  description: "Perfil de usuario de ROLA",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="es">
        <body
          className={cn(
            "grid h-svh grid-rows-[auto_1fr_auto]",
            fonts.className
          )}
        >
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}

export default RootLayout;
