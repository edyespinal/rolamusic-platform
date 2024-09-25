import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@styles/globals.css";
import { LayoutProps } from "@typings/globals";
import { PHProvider } from "./providers";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ROLA | Links",
  description: "Síguenos y no te pierdas nada",
};

export default function RootLayout({ children }: Readonly<LayoutProps>) {
  return (
    <html lang="es">
      <PHProvider>
        <body className={font.className}>{children}</body>
      </PHProvider>
    </html>
  );
}
