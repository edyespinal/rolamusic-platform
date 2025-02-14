"use client";

import React from "react";
import Link from "next/link";
import { Button, Container, Text, Title } from "@rola/ui/components";
import { ArrowLeftIcon } from "@rola/ui/icons";

function NoAccessToPost({ artistId }: { artistId: string }) {
  return (
    <Container
      size="lg"
      className="mb-20 mt-4 flex flex-col items-start gap-16 px-4 lg:mt-12 lg:flex-row lg:px-0"
    >
      <div className="relative lg:w-3/4">
        <Link href={`/artists/${artistId}`} className="lg:absolute lg:-left-20">
          <Button variant="outline" size="icon" className="mb-4">
            <ArrowLeftIcon />
          </Button>
        </Link>

        <Title order={2} align="left" underline className="pb-8">
          Lo sentimos
        </Title>
        <Text>No tienes acceso a esta publicación</Text>
      </div>
    </Container>
  );
}

export { NoAccessToPost };
