"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";
import { Container, Text, useToast } from "@rola/ui/components";
import { CheckIcon } from "@rola/ui/icons";
import { cn } from "@rola/tailwind-config/utils";

function UploadOverlay({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { user, isLoaded, isSignedIn } = useUser();
  const { toast } = useToast();

  async function updatePic(e: React.ChangeEvent<HTMLInputElement>) {
    if (!isLoaded || !isSignedIn) {
      return;
    }

    if (!e.target.files) {
      return;
    }

    const [file] = e.target.files;

    if (!file) {
      return;
    }

    if (file.size > 1024 * 1024 * 1) {
      console.error("file size too big");
    }

    if (
      file.type !== "image/jpeg" &&
      file.type !== "image/png" &&
      file.type !== "image/jpg" &&
      file.type !== "image/webp"
    ) {
      console.error("file type not supported");
    }

    await user.setProfileImage({
      file,
    });

    await user.reload();

    toast({
      title: "Imagen actualizada",
      description: "Imagen de perfil actualizada correctamente",
      icon: <CheckIcon />,
    });
  }

  return (
    <Container
      className={cn("group relative overflow-hidden rounded-full", className)}
    >
      {children}

      <Container className="from-brand-black absolute inset-0 hidden bg-gradient-to-t to-transparent text-center group-hover:block">
        <label className="absolute bottom-2 left-0 right-0 cursor-pointer text-center">
          <Text>Editar</Text>
          <input
            type="file"
            accept="image/jpeg, image/png, image/jpg, image/webp"
            onChange={updatePic}
            className="hidden"
          />
        </label>
      </Container>
    </Container>
  );
}

export { UploadOverlay };
