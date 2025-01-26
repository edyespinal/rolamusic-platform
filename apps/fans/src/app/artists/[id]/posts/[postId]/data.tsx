"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { submitComment } from "./actions";
import { useToast } from "@rola/ui/components";
import { PostComment } from "@rola/services/schemas";

type FormValues = {
  artistId: string;
  postId: string;
  comment: string;
};

const useArtistPostPageData = (comments: PostComment[]) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [postComments, setPostComments] = React.useState(comments);

  const { toast } = useToast();

  const form = useForm<FormValues>({
    defaultValues: {
      comment: "",
    },
  });

  async function handleSubmitComment(values: FormValues) {
    setIsLoading(true);

    try {
      const { data } = await submitComment({
        artistId: values.artistId,
        postId: values.postId,
        comment: values.comment,
      });

      setPostComments([data, ...postComments]);
      form.reset();

      toast({
        title: "Comentario enviado",
        description: "Comentario enviado correctamente",
      });
    } catch (error) {
      console.error(error);

      toast({
        title: "Error",
        description: "No se pudo enviar el comentario",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return {
    form,
    postComments,
    handleSubmitComment,

    isLoading,
  };
};

export { useArtistPostPageData };
