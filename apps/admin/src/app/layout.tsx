import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { cn } from "@rola/tailwind-config/utils";
import { Toaster } from "@rola/ui/components";
import "@styles/globals.css";

const fonts = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ROLA | Admin",
  description: "Panel de administración de ROLA",
};

type LayoutProps = {
  children: React.ReactNode;
};

function RootLayout(props: Readonly<LayoutProps>) {
  const { children } = props;

  return (
    <ClerkProvider>
      <html lang="es">
        <body
          className={cn(
            "grid h-[100dvh] grid-rows-[auto_1fr]",
            fonts.className
          )}
        >
          <main>{children}</main>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}

export default RootLayout;
