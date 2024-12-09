"use client";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { submitGuestRequest } from "./actions";
import { useToast } from "@rola/ui/components";
import { PodcastEpisode } from "@rola/services/schemas";

type FormValues = {
  name: string;
  email: string;
  link: string;
  instagram: string;
};

const useRolaTalksData = (episodes: PodcastEpisode[]) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      link: "",
      instagram: "",
    },
  });

  async function handleSubmit(values: FormValues) {
    setIsLoading(true);

    try {
      await submitGuestRequest({
        name: values.name,
        email: values.email,
        socials: [
          { name: "link", url: values.link },
          { name: "instagram", url: values.instagram },
        ],
      });

      toast({
        title: "Solicitud enviada",
        description: "Se ha enviado tu solicitud de colaboración.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description:
          "Ha ocurrido un error al enviar la solicitud de colaboración.",
        variant: "destructive",
      });
    }

    setIsLoading(false);
  }

  return {
    form,
    handleSubmit,
    isLoading,
  };
};

export { useRolaTalksData };
