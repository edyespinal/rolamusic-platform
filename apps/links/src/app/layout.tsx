import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import dynamic from "next/dynamic";
import { LayoutProps } from "@typings/globals";
import { PHProvider } from "./providers";
import "@styles/globals.css";
import { cn } from "@rola/tailwind-config/utils";

const PostHogPageView = dynamic(() => import("./PostHogPageView"), {
  ssr: false,
});

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ROLA | Links",
  description: "Síguenos y no te pierdas nada",
};

export default function RootLayout({ children }: Readonly<LayoutProps>) {
  return (
    <html lang="es">
      <PHProvider>
        <PostHogPageView />
        <body className={cn("bg-black", font.className)}>{children}</body>
      </PHProvider>
    </html>
  );
}
