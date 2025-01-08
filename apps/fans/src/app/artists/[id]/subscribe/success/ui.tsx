"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Container, Loader, Text, Title } from "@rola/ui/components";

function SubscriptionSuccessPageUI({ artistId }: { artistId: string }) {
  const router = useRouter();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      router.push(`/artists/${artistId}`);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <Container size="sm" className="flex flex-col items-center gap-4 py-24">
      <Loader size="xl" />
      <div className="text-center">
        <Title order={2} type="rola" className="pb-8">
          ¡Gracias por apoyar a los <br /> artistas independientes!
        </Title>
        <Text>Te redirigiremos en unos segundos.</Text>
        <Text className="text-gray text-sm">
          Si no has redirigido automáticamente, <br /> puedes hacerlo con este{" "}
          <Link href={`/artists/${artistId}`} className="text-brand">
            enlace.
          </Link>
        </Text>
      </div>
    </Container>
  );
}

export { SubscriptionSuccessPageUI };
