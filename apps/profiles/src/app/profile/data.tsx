"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { updateUserProfile } from "./actions";
import { useUser } from "@clerk/nextjs";
import { useToast } from "@rola/ui/components";

export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  imageUrl: string;
  role: string;
  genres: string[];
};

const useProfilePageData = (data: FormValues) => {
  const [loading, setLoading] = React.useState(false);

  const { user, isLoaded } = useUser();
  const { toast } = useToast();

  const form = useForm<FormValues>({
    defaultValues: {
      ...data,
    },
  });

  async function handleSubmit(values: FormValues) {
    if (!isLoaded || !user) {
      return;
    }

    try {
      setLoading(true);

      await updateUserProfile(user.id, values);

      toast({
        title: "Éxito",
        description: "Se ha actualizado tu perfil",
      });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  return {
    imageUrl: user?.imageUrl || "",
    form,
    handleSubmit,
    loading,
  };
};

export { useProfilePageData };
