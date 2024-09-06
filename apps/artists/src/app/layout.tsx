import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Toaster } from "@rola/ui/components";
import { ClerkProvider } from "@clerk/nextjs";
import { Provider } from "jotai";
import "../styles/globals.css";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ROLA | Artist Studio - Panel de administración para artistas",
  description:
    "ROLA Artists Studio es un centro de administración para los artistas",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<LayoutProps>) {
  return (
    <ClerkProvider>
      <html lang="es">
        <body className={font.className}>
          <Provider>{children}</Provider>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
