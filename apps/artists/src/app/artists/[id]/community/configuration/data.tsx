"use client";

import React from "react";
import { ArtistSubscriptionTier } from "@rola/services/schemas";
import { useToast } from "@rola/ui/components";
import { useFieldArray, useForm } from "react-hook-form";
import { FormValues } from "./types";
import { createNewSubscriptionTier, updateSubscriptionTier } from "./actions";

const useCommunityConfigurationData = (
  artistId: string,
  artistName: string,
  stripeAccountId: string,
  tiers: ArtistSubscriptionTier[]
) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    defaultValues: {
      tiers: tiers
        ? tiers.map((tier) => ({
            ...tier,
            tierId: tier.id,
            price: tier.prices.monthly.value / 100,
            perks: tier.perks.map((perk) => ({
              name: perk,
            })),
          }))
        : [],
    },
  });

  const {
    fields: tierFields,
    append: addTier,
    remove: removeTier,
  } = useFieldArray<FormValues, "tiers", "id">({
    control: form.control,
    name: "tiers",
  });

  function usePerksArray(index: number) {
    const { fields, append, remove } = useFieldArray<
      FormValues,
      "tiers" | `tiers.${number}.perks`,
      "id"
    >({
      control: form.control,
      name: `tiers.${index}.perks`,
    });

    return {
      perkFields: fields,
      addPerk: append,
      removePerk: remove,
    };
  }

  async function handleSubmit(values: FormValues, event: any) {
    setIsLoading(true);

    try {
      const tiers = values.tiers;
      const tier = tiers[Number(event.nativeEvent.submitter.dataset.index)];

      if (!tier) {
        return;
      }

      if (!tier.prices || !tier.tierId) {
        await createNewSubscriptionTier(artistId, artistName, stripeAccountId, {
          active: tier.active,
          name: tier.name,
          label: tier.label,
          description: tier.description,
          price: tier.price,
          perks: tier.perks,
        });

        toast({
          title: "Suscripción creada",
          description: "La suscripción ha sido creada correctamente",
        });

        return;
      }

      await updateSubscriptionTier(artistId, tier.tierId, {
        active: tier.active,
        label: tier.label,
        description: tier.description,
        perks: tier.perks,
      });

      toast({
        title: "Suscripción actualizada",
        description: "La suscripción ha sido actualizada correctamente",
      });
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
    tierFields,
    addTier,
    removeTier,
    usePerksArray,
    handleSubmit,
    isLoading,
  };
};

export { useCommunityConfigurationData };
