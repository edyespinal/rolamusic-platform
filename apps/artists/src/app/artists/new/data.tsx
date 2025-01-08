"use client";

import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { createArtist } from "./actions";
import { useToast } from "@rola/ui/components";
import { RequiredFields } from "../../../../../../packages/services/src/utils";
import { Artist } from "@rola/services/schemas";
import { useRouter } from "next/navigation";

const useNewArtistData = (email = "") => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<RequiredFields<Omit<Artist, "id">>>({
    defaultValues: {
      name: "",
      admin: "",
      email,
      genres: [],
      location: {},
      members: [],
      year: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "members",
  });

  async function handleOnSubmit(values: RequiredFields<Omit<Artist, "id">>) {
    setIsLoading(true);

    try {
      const res = await createArtist(values);

      toast({
        title: "Artista creado",
        description: "Artista creado correctamente",
      });

      router.push(`/artists/${res.artist.id}`);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "No se pudo crear el artista",
        variant: "destructive",
      });
    }

    setIsLoading(false);
  }

  return {
    form,
    fields,
    append,
    remove,
    handleOnSubmit,
    isLoading,
  };
};

export { useNewArtistData };
