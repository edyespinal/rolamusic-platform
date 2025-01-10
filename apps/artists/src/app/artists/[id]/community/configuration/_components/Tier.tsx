"use client";

import React from "react";
import { PencilIcon, PlusIcon, XIcon } from "@rola/ui/icons";
import {
  Button,
  Container,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
  Switch,
  Title,
} from "@rola/ui/components";
import { Perk } from "./Perk";
import { FieldArrayWithId, UseFormReturn } from "react-hook-form";
import { useCommunityConfigurationData } from "../data";
import { ArtistSubscriptionTier } from "@rola/services/schemas";
import { FormValues } from "../types";
import { cn } from "@rola/tailwind-config/utils";

function Tier({
  artistId,
  artistName,
  stripeAccountId,
  index,
  tier,
  tiers,
  form,
}: {
  artistId: string;
  artistName: string;
  stripeAccountId: string;
  index: number;
  tier: FieldArrayWithId<FormValues, "tiers", "id">;
  tiers: ArtistSubscriptionTier[];
  form: UseFormReturn<FormValues, any, undefined>;
}) {
  const { usePerksArray, isLoading } = useCommunityConfigurationData(
    artistId,
    artistName,
    stripeAccountId,
    tiers
  );
  const { perkFields, addPerk, removePerk } = usePerksArray(index);

  const [isEditable, setIsEditable] = React.useState(!tier.name);

  return (
    <Container
      className={cn(
        "flex flex-col gap-4 rounded-xl border border-transparent bg-neutral-800 px-12 py-8",
        isEditable && "border-brand"
      )}
    >
      <Container className="flex justify-between">
        <Title order={4} className="text-brand text-left">
          {tier.name ? tier.name : "Nueva suscripción"}
        </Title>

        <Button
          type="button"
          size="sm"
          variant="outline"
          onClick={() => setIsEditable(!isEditable)}
        >
          {isEditable ? (
            <React.Fragment>
              <XIcon className="mr-2" />
              Cancelar
            </React.Fragment>
          ) : (
            <React.Fragment>
              <PencilIcon className="mr-2" />
              Editar suscripción
            </React.Fragment>
          )}
        </Button>
      </Container>

      <FormField
        control={form.control}
        name={`tiers.${index}.active`}
        render={({ field }) => (
          <FormItem className="flex items-center gap-2">
            <FormLabel className="mt-1">Activo</FormLabel>
            <FormControl>
              <Switch
                disabled={!isEditable}
                checked={field.value}
                onCheckedChange={(value) => field.onChange(value)}
              />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`tiers.${index}.recommended`}
        render={({ field }) => (
          <FormItem className="flex items-center gap-2">
            <FormLabel className="mt-1">Recomendada</FormLabel>
            <FormControl>
              <Switch
                disabled={!isEditable}
                checked={field.value}
                onCheckedChange={(value) => field.onChange(value)}
              />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`tiers.${index}.name`}
        render={({ field }) => (
          <FormItem>
            <FormLabel required>Nombre</FormLabel>
            <FormControl>
              <Input
                type="text"
                disabled={!isEditable || !!tier.name}
                readOnly={!!tier.prices}
                required
                {...field}
              />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`tiers.${index}.label`}
        render={({ field }) => (
          <FormItem>
            <FormLabel required>Nombre para mostrar</FormLabel>
            <FormControl>
              <Input type="text" disabled={!isEditable} required {...field} />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`tiers.${index}.description`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Descripción</FormLabel>
            <FormControl>
              <Input type="text" disabled={!isEditable} {...field} />
            </FormControl>
          </FormItem>
        )}
      />

      <Title order={5} align="left">
        Tipos de Suscripción
      </Title>

      <Container className="flex items-center gap-x-4">
        <FormField
          control={form.control}
          name={`tiers.${index}.price`}
          render={({ field }) => (
            <FormItem>
              <FormLabel required>Valor mensual (en EUR)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  disabled={!isEditable || !!tier.name}
                  readOnly={!!tier.prices}
                  required
                  min={3}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </Container>

      <Title order={5} align="left">
        Beneficios
      </Title>

      <div className="flex flex-col gap-4">
        {perkFields.map((_perk, perkIndex) => (
          <Perk
            key={perkIndex}
            tierIndex={index}
            perkIndex={perkIndex}
            isEditable={isEditable}
            form={form}
            removePerk={removePerk}
          />
        ))}

        <Button
          type="button"
          size="icon"
          variant="outline"
          disabled={!isEditable}
          onClick={() => addPerk({ name: "" })}
        >
          <PlusIcon />
        </Button>

        {isEditable && (
          <div className="flex justify-end gap-x-4">
            <Button
              id={String(index)}
              data-index={index}
              type="submit"
              size="sm"
              loading={isLoading}
              onClick={() => {
                setTimeout(() => {
                  setIsEditable(false);
                }, 1000);
              }}
            >
              Guardar
            </Button>
          </div>
        )}
      </div>
    </Container>
  );
}

export { Tier };
