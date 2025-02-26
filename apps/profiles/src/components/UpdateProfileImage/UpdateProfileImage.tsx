"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";
import { Button, useToast } from "@rola/ui/components";
import { CheckIcon, XIcon } from "@rola/ui/icons";

function UpdateProfileImage() {
  const [loading, setLoading] = React.useState(false);

  const { user, isLoaded, isSignedIn } = useUser();
  const { toast } = useToast();

  async function updatePic(e: React.ChangeEvent<HTMLInputElement>) {
    try {
      setLoading(true);

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

      if (file.size > 1024 * 1024 * 0.5) {
        throw new Error("El tamaño de la imagen es demasiado grande");
      }

      if (
        file.type !== "image/jpeg" &&
        file.type !== "image/png" &&
        file.type !== "image/jpg" &&
        file.type !== "image/webp"
      ) {
        throw new Error("El formato de la imagen no es válido");
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
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "No se ha podido actualizar la imagen",
        variant: "destructive",
        icon: <XIcon />,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <label className="hover:bg-background cursor-pointer rounded-full px-4 py-2 text-sm">
      Cambiar imagen de perfil
      <input
        type="file"
        accept="image/jpeg, image/png, image/jpg, image/webp"
        onChange={updatePic}
        className="hidden"
      />
    </label>
  );
}

export { UpdateProfileImage };
