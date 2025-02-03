"use client";

import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { Artist } from "@rola/services/schemas";
import { useToast } from "@rola/ui/components";
import { updateArtist } from "./actions";

export type FormValues = Partial<Artist>;

const useArtistData = (artist: Artist) => {
  const { toast } = useToast();

  const [isLoading, setIsLoading] = React.useState(false);
  const [imageUrls, setImageUrls] = React.useState({
    profileURL: artist.profileURL,
    coverURL: artist.coverURL,
  });

  const form = useForm<FormValues>({
    defaultValues: {
      name: artist.name,
      email: artist.email,
      genres: artist.genres,
      year: artist.year,
      location: {
        state: artist.location?.state ?? "",
        country: artist.location?.country ?? "",
      },
      bio: artist.bio,
      members: artist.members,
    },
  });

  const {
    fields: members,
    append: addMember,
    remove: removeMember,
  } = useFieldArray<FormValues, "members", "id">({
    control: form.control,
    name: "members",
  });

  async function handleSubmit(values: FormValues) {
    setIsLoading(true);

    try {
      const res = await updateArtist(artist, values);

      if (!res.success) {
        throw new Error(res.message);
      }

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
    } finally {
      setIsLoading(false);
    }
  }

  return {
    form,
    imageUrls,
    setImageUrls,
    members,
    addMember,
    removeMember,
    handleSubmit,
    isLoading,
  };
};

export { useArtistData };
