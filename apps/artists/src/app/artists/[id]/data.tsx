"use client";

import React from "react";
import { Artist, ArtistCommunity, ArtistMember } from "@rola/services/schemas";
import { useFieldArray, useForm } from "react-hook-form";
import { useToast } from "@rola/ui/components";
import { services } from "@rola/services/firebase";

export type FormValues = {
  email: string;
  name: string;
  genres: string[];
  year: string;
  province: string;
  profileURL: string;
  coverURL: string;
  bio: string;
  message: string;
  videoURL: string;
  songs: string[];
  members: ArtistMember[];
};

const useArtistData = (artist: Artist, community: ArtistCommunity) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    defaultValues: {
      email: artist.email,
      name: artist.name,
      genres: artist.genres,
      year: artist.year,
      province: artist.location.province,
      profileURL: artist.profileURL,
      coverURL: artist.coverURL,
      bio: artist.bio,
      message: community.message ?? "",
      videoURL: community.videoURL ?? "",
      songs: community.songs ?? [],
      members: artist.members,
    },
  });

  const {
    fields: members,
    append: addMember,
    remove: removeMember,
  } = useFieldArray({
    control: form.control,
    name: "members",
  });

  async function handleSubmit(values: FormValues) {
    setIsLoading(true);

    try {
      await services.updateArtist(artist.id, {
        ...artist,
        email: values.email,
        name: values.name,
        genres: values.genres,
        year: values.year,
        location: {
          ...artist.location,
          province: values.province,
        },
        profileURL: values.profileURL,
        coverURL: values.coverURL,
        bio: values.bio,
        members: values.members,
      });

      await services.updateCommunity(artist.id, {
        message: values.message ?? "",
        videoURL: values.videoURL ?? "",
        songs: values.songs ?? [],
      });

      toast({
        title: "Artista actualizado",
        description: "Artista actualizado correctamente",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "No se pudo actualizar el artista",
        variant: "destructive",
      });
    }

    setIsLoading(false);
  }

  return {
    form,
    members,
    addMember,
    removeMember,
    handleSubmit,
    isLoading,
  };
};

export { useArtistData };
