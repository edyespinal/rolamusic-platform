"use client";

import React from "react";
import { Container, Loader, Text } from "@rola/ui/components";
import { useRouter } from "next/navigation";

function UpdateSubscriptionTiersPageUI({ artistId }: { artistId: string }) {
  const router = useRouter();

  setTimeout(() => {
    router.push(`/artists/${artistId}/community/configuration`);
  }, 2000);

  return (
    <Container className="flex flex-col items-center gap-4 pt-20">
      <Text>Actualizando suscripciones</Text>
      <Loader />
    </Container>
  );
}

export { UpdateSubscriptionTiersPageUI };
