"use client";

import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useToast } from "@rola/ui/components";
import { FormTier } from "../types";
import { updateSubscriptionTier } from "./actions";
import { ArtistSubscriptionTier } from "@rola/services/schemas";

const useEditSubscriptionTierData = (
  artistId: string,
  tier: ArtistSubscriptionTier
) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();

  const form = useForm<FormTier>({
    defaultValues: {
      ...tier,
      price: tier.prices.monthly.value / 100,
      perks: tier.perks.map((perk) => ({
        text: perk,
      })),
    },
  });

  const {
    fields: perkFields,
    append: addPerk,
    remove: removePerk,
  } = useFieldArray<FormTier, "perks", "id">({
    control: form.control,
    name: "perks",
  });

  async function handleSubmit(values: FormTier) {
    setIsLoading(true);

    try {
      await updateSubscriptionTier(artistId, tier.id, values);

      toast({
        title: "Suscripción actualizada",
        description: "La suscripción ha sido actualizada correctamente",
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

export { useEditSubscriptionTierData };
