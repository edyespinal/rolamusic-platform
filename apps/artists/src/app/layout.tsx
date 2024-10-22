import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { extractRouterConfig } from "uploadthing/server";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { Provider } from "jotai";
import { Toaster } from "@rola/ui/components";
import { LayoutProps } from "@typings/globals";
import { storageFileRouter } from "./api/uploadthing/core";
import "../styles/globals.css";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ROLA | Artistas - Panel de administración para artistas",
  description: "ROLA Artistas es un centro de administración para los artistas",
};

export default function RootLayout({ children }: Readonly<LayoutProps>) {
  return (
    <ClerkProvider>
      <html lang="es">
        <body className={font.className}>
          <NextSSRPlugin
            routerConfig={extractRouterConfig(storageFileRouter)}
          />
          <Provider>{children}</Provider>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
