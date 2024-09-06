"use client";

import React from "react";
import { Container, Loader, Text } from "@rola/ui/components";
import { useRouter } from "next/navigation";

function ProfileCreationUI() {
  const router = useRouter();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <Container size="sm" className="py-24 flex flex-col items-center gap-4">
      <Loader size="xl" />
      <div className="text-center">
        <Text>Estamos creando tu cuenta...</Text>
        <Text>Esto puede tardar unos segundos</Text>
      </div>
    </Container>
  );
}

export { ProfileCreationUI };
