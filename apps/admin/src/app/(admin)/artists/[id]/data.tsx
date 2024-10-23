"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { db } from "@rola/services/firebase";
import { useToast } from "@rola/ui/components";
import { FormValues, PageUIProps } from "./types";
import { Artist, ArtistCommunity } from "@rola/services/schemas";

const useArtistsPageData = ({
  artist,
  community,
}: {
  artist: Artist;
  community: ArtistCommunity | null;
}) => {
  const { toast } = useToast();
  const [profileImgUrl, setProfileImgUrl] = React.useState(artist.profileURL);
  const [coverImgUrl, setCoverImgUrl] = React.useState(artist.coverURL);
  const [isUploading, setIsUploading] = React.useState(false);

  const form = useForm<FormValues>({
    defaultValues: {
      artist,
      community: community ? community : {},
    },
  });

  async function uploadProfileImage(files: File[]) {
    setIsUploading(true);

    const imagUrl = await db.artists.updateArtistProfileImage(artist.id, "");

    setProfileImgUrl(imagUrl.url);
    setIsUploading(false);

    toast({
      title: "Imagen de perfil actualizada",
      description: "Imagen de perfil actualizada correctamente",
    });
  }

  async function uploadCoverImage(files: File[]) {
    setIsUploading(true);

    const imagUrl = await db.artists.updateArtistCoverImage(artist.id, "");

    setCoverImgUrl(imagUrl.url);
    setIsUploading(false);

    toast({
      title: "Imagen de perfil actualizada",
      description: "Imagen de perfil actualizada correctamente",
    });
  }

  async function onSubmit(values: FormValues) {
    try {
      await db.artists.updateArtist(artist.id, values.artist);
      await db.artists.updateArtistCommunity(artist.id, values.community);

      toast({
        title: "Artista actualizado",
        description: "Artista actualizado correctamente",
      });
    } catch (error) {
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
