"use client";

import React from "react";
import { PodcastEpisode } from "@rola/services/schemas";
import { useForm } from "react-hook-form";
import { addNewEpisode } from "./actions";
import { useToast } from "@rola/ui/components";

const useNewEpisodeData = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();

  const form = useForm<PodcastEpisode>({
    defaultValues: {
      id: "",
      number: 0,
      title: "",
      description: "",
      guest: "",
      url: "",
      publishedAt: "",
    },
  });

  async function handleSubmit(values: PodcastEpisode) {
    setIsLoading(true);

    try {
      await addNewEpisode({
        ...values,
        number: Number(values.number),
      });

      toast({
        title: "Episodio creado",
        description: "Episodio creado correctamente",
      });
    } catch (error) {
      toast({
        title: "Error al crear episodio",
        description: "Error al crear episodio",
        variant: "destructive",
      });
    }

    form.reset();
    setIsLoading(false);
  }

  return {
    form,
    handleSubmit,
    isLoading,
  };
};

export { useNewEpisodeData };
