"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { services } from "@rola/services/firebase";
import { useToast } from "@rola/ui/components";
import { FormValues, PageUIProps } from "./types";

const useArtistsPageData = ({
  artist,
  community,
}: Omit<PageUIProps, "admin">) => {
  const { toast } = useToast();
  const [profileImgUrl, setProfileImgUrl] = React.useState(artist.profileURL);
  const [coverImgUrl, setCoverImgUrl] = React.useState(artist.coverURL);
  const [isUploading, setIsUploading] = React.useState(false);

  const form = useForm<FormValues>({
    defaultValues: {
      artist,
      community,
    },
  });

  async function uploadProfileImage(files: File[]) {
    setIsUploading(true);

    const imagUrl = await services.updateArtistProfileImage(
      artist.id,
      files[0] as File
    );

    setProfileImgUrl(imagUrl);
    setIsUploading(false);

    toast({
      title: "Imagen de perfil actualizada",
      description: "Imagen de perfil actualizada correctamente",
    });
  }

  async function uploadCoverImage(files: File[]) {
    setIsUploading(true);

    const imagUrl = await services.updateArtistCoverImage(
      artist.id,
      files[0] as File
    );

    setCoverImgUrl(imagUrl);
    setIsUploading(false);

    toast({
      title: "Imagen de perfil actualizada",
      description: "Imagen de perfil actualizada correctamente",
    });
  }

  async function onSubmit(values: FormValues) {
    try {
      await services.updateArtist(artist.id, values.artist);
      await services.updateCommunity(artist.id, values.community);

      toast({
        title: "Artista actualizado",
        description: "Artista actualizado correctamente",
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);

      toast({
        title: "Error",
        description: "No se pudo actualizar el artista",
        variant: "destructive",
      });
    }
  }

  return {
    form,
    profileImgUrl,
    coverImgUrl,
    isUploading,
    uploadProfileImage,
    uploadCoverImage,
    onSubmit,
  };
};

export { useArtistsPageData };
