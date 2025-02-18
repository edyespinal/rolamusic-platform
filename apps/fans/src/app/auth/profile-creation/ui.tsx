"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Container, Loader, Text } from "@rola/ui/components";

function ProfileCreationUI({ redirectUrl }: { redirectUrl?: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      return router.push(
        redirectUrl || searchParams.get("redirect_url") || "/"
      );
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <Container size="sm" className="flex flex-col items-center gap-4 py-24">
      <Loader size="xl" />
      <div className="text-center">
        <Text>Estamos creando tu cuenta...</Text>
        <Text>Esto puede tardar unos segundos</Text>
      </div>
    </Container>
  );
}

export { ProfileCreationUI };
