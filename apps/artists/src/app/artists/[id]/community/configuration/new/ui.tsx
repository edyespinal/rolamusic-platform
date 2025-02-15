"use client";

import React from "react";
import Link from "next/link";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  Input,
  Separator,
  Switch,
  Title,
} from "@rola/ui/components";
import { ArrowLeftIcon, PlusIcon, TrashIcon } from "@rola/ui/icons";
import { SubscriptionPreview } from "@components/SubscriptionPreview/SubscriptionPreview";
import { useNewSubscriptionPageData } from "./data";

function NewSubscriptionTierPageUI({
  artistId,
  stripeAccountId,
  artistName,
}: {
  artistId: string;
  stripeAccountId: string;
  artistName: string;
}) {
  const { form, perkFields, addPerk, removePerk, handleSubmit, isLoading } =
    useNewSubscriptionPageData(artistId, artistName, stripeAccountId);

  return (
    <Container className="pb-24">
      <Title order={2} align="left" underline className="pb-4">
        Nueva suscripción
      </Title>

      <Link href={`/artists/${artistId}/community/configuration`}>
        <Button size="icon" variant="outline" className="mb-6">
          <ArrowLeftIcon />
        </Button>
      </Link>

      <Container className="flex flex-col gap-4 lg:flex-row">
        <form onSubmit={form.handleSubmit(handleSubmit)} className="grow">
          <Form {...form}>
            <Container className="flex flex-col gap-4 rounded-xl border border-transparent bg-neutral-800 px-12 py-8">
              <FormField
                control={form.control}
                name="active"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-2">
                    <FormLabel className="mt-1">Activo</FormLabel>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={(value) => field.onChange(value)}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="recommended"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-2">
                    <FormLabel className="mt-1">Recomendada</FormLabel>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={(value) => field.onChange(value)}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel required>Nombre</FormLabel>
                    <FormControl>
                      <Input type="text" required {...field} />
                    </FormControl>
                    <FormDescription>
                      Este campo no será visible para tus fans
                    </FormDescription>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="label"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel required>Nombre para mostrar</FormLabel>
                    <FormControl>
                      <Input type="text" required {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descripción</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
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
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel required>Valor mensual (en EUR)</FormLabel>
                      <FormControl>
                        <Input type="number" required min={3} {...field} />
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
                  <div key={perkIndex} className="flex items-center gap-4">
                    <FormField
                      control={form.control}
                      name={`perks.${perkIndex}.text`}
                      render={({ field }) => (
                        <FormItem className="grow">
                          <FormControl>
                            <Input type="text" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      className="flex-none"
                      onClick={() => removePerk(perkIndex)}
                    >
                      <TrashIcon />
                    </Button>
                  </div>
                ))}

                <Button
                  type="button"
                  size="icon"
                  variant="outline"
                  onClick={() => addPerk({ text: "" })}
                >
                  <PlusIcon />
                </Button>

                <div className="flex justify-end gap-x-4">
                  <Button type="submit" size="sm" loading={isLoading}>
                    Guardar
                  </Button>
                </div>
              </div>
            </Container>
          </Form>
        </form>

        <Container className="max-w-80">
          <Separator className="my-12 block lg:hidden" />
          <Title order={5} align="left" underline className="mb-8">
            Vista previa
          </Title>
          <SubscriptionPreview
            tier={{
              recommended: form.watch("recommended"),
              label: form.watch("label"),
              description: form.watch("description"),
              prices: {
                monthly: {
                  priceId: "",
                  value: form.watch("price"),
                },
                yearly: {
                  priceId: "",
                  value: form.watch("price") * 12,
                },
              },
              perks: form
                .watch("perks")
                .map((perk) => perk.text)
                .filter(Boolean),
            }}
          />
        </Container>
      </Container>
    </Container>
  );
}

export { NewSubscriptionTierPageUI };
