"use client";

import React from "react";
import { useToast } from "@rola/ui/components";
import { useFieldArray, useForm } from "react-hook-form";
import { FormTier } from "../types";
import { createNewSubscriptionTier } from "./actions";

const useNewSubscriptionPageData = (
  artistId: string,
  artistName: string,
  stripeAccountId: string
) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();

  const form = useForm<Omit<FormTier, "id">>({
    defaultValues: {
      active: true,
      access: 0,
      name: "",
      label: "",
      description: "",
      price: 0,
      perks: [],
      recommended: false,
    },
  });

  const {
    fields: perkFields,
    append: addPerk,
    remove: removePerk,
  } = useFieldArray<Omit<FormTier, "id">, "perks", "id">({
    control: form.control,
    name: "perks",
  });

  async function handleSubmit(values: Omit<FormTier, "id">) {
    setIsLoading(true);

    try {
      await createNewSubscriptionTier(artistId, artistName, stripeAccountId, {
        active: values.active,
        access: values.access,
        name: values.name,
        label: values.label,
        description: values.description,
        price: values.price,
        perks: values.perks,
        recommended: values.recommended,
        subscribers: [],
      });

      toast({
        title: "Suscripción creada",
        description: "La suscripción ha sido creada correctamente",
      });

      setTimeout(() => {
        window.location.href = `/artists/${artistId}/community/configuration/update`;
      }, 500);
    } catch (error) {
      console.error(error);

      toast({
        title: "Error",
        description: "No se ha podido actualizar la suscripción",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return {
    form,
    perkFields,
    addPerk,
    removePerk,
    handleSubmit,
    isLoading,
  };
};

export { useNewSubscriptionPageData };
