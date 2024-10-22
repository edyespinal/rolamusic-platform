"use client";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { submitGuestRequest } from "./actions";
import { useToast } from "@rola/ui/components";
import { PodcastEpisode } from "@rola/services/schemas";

type FormValues = {
  name: string;
  email: string;
  website: string;
  youtube: string;
  instagram: string;
  tiktok: string;
  twitter: string;
  music: string;
};

const useRolaTalksData = (episodes: PodcastEpisode[]) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      website: "",
      youtube: "",
      instagram: "",
      tiktok: "",
      twitter: "",
      music: "",
    },
  });

  async function handleSubmit(values: FormValues) {
    setIsLoading(true);

    try {
      await submitGuestRequest({
        name: values.name,
        email: values.email,
        socials: [
          { name: "website", url: values.website },
          { name: "youtube", url: values.youtube },
          { name: "instagram", url: values.instagram },
          { name: "tiktok", url: values.tiktok },
          { name: "twitter", url: values.twitter },
          { name: "music", url: values.music },
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
