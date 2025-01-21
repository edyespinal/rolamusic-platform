"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { ArtistPost } from "@rola/services/schemas";
import { postTypesLabels } from "@rola/services/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { createArtistPost } from "./actions";
import { useToast } from "@rola/ui/components";
import { ClientUploadedFileData } from "uploadthing/types";
import { POST_TYPES } from "@rola/services/constants";

const useNewArtistPostData = (artistId: string, postId: string) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [type, setType] = React.useState<keyof typeof postTypesLabels | null>(
    null
  );
  const [imageUrl, setImageUrl] = React.useState<string | null>(null);

  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<ArtistPost>({
    defaultValues: {
      id: postId,
      access: 0,
      type: POST_TYPES.TEXT,
      caption: "",
      date: new Date(),
      url: undefined,
    },
  });

  function onBeforeUploadBegin(files: File[]) {
    if (files.length > 1 || (files[0] && files[0].size > 4 * 1024 * 1024)) {
      return [];
    }

    return files;
  }

  function onUploadComplete(data: ClientUploadedFileData<{ url: string }>[]) {
    if (!data[0]) {
      return;
    }

    form.setValue("url", data[0].url);
    setImageUrl(data[0].url);
  }

  function onUploadError(error: any) {
    console.log(error);

    toast({
      title: "Error",
      description: "No se ha podido subir la imagen",
      variant: "destructive",
    });
  }

  async function handleSubmit(values: ArtistPost) {
    setIsLoading(true);

    try {
      await createArtistPost(artistId, {
        ...values,
        active: true,
        access: Number(values.access),
      });

      toast({
        title: "Post creado",
        description: "Post creado correctamente",
      });

      setTimeout(() => {
        router.push(`/artists/${artistId}/community/posts`);
      }, 2000);
    } catch (error: Error | any) {
      console.log(error);

      toast({
        title: "Error",
        description: error.message || "Ha ocurrido un error",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return {
    form,
    handleSubmit,
    type,
    setType,
    imageUrl,
    onBeforeUploadBegin,
    onUploadComplete,
    onUploadError,
    isLoading,
  };
};

export { useNewArtistPostData };
