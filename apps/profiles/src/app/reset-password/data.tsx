"use client";

import { useSignIn, useUser } from "@clerk/nextjs";
import { useToast } from "@rola/ui/components";
import { CheckIcon, XIcon } from "@rola/ui/icons";
import React from "react";
import { useForm } from "react-hook-form";

export type FormValues = {
  newPassword: string;
  currentPassword: string;
};

function useResetPasswordData() {
  const [loading, setLoading] = React.useState(false);

  const { user, isLoaded } = useUser();
  const { toast } = useToast();

  const form = useForm<FormValues>({
    defaultValues: {
      newPassword: "",
      currentPassword: "",
    },
  });

  async function resetPassword(values: FormValues) {
    if (!isLoaded || !user) {
      return;
    }

    try {
      setLoading(true);

      await user.updatePassword({
        newPassword: values.newPassword,
        currentPassword: values.currentPassword,
      });

      toast({
        title: "Contraseña restablecida",
        description: "Se ha restablecido tu contraseña",
        icon: <CheckIcon />,
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
        icon: <XIcon />,
      });
    } finally {
      setLoading(false);
    }
  }

  return {
    form,
    passwordEnabled: isLoaded && user && user.passwordEnabled,
    resetPassword,
    loading,
  };
}

export { useResetPasswordData };
