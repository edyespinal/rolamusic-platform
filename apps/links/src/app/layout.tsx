import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LayoutProps } from "@typings/globals";
import { cn } from "@rola/tailwind-config/utils";
import "@styles/globals.css";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ROLA | Links",
  description: "Síguenos y no te pierdas nada",
};

export default function RootLayout({ children }: Readonly<LayoutProps>) {
  return (
    <html lang="es">
      <body className={cn("bg-black", font.className)}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
