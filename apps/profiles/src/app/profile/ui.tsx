"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Container,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
  Text,
  Title,
} from "@rola/ui/components";
import React from "react";
import { FormValues, useProfilePageData } from "./data";
import { genresListOptions } from "@rola/services/utils";
import { ArrowLeftIcon } from "@rola/ui/icons";
import Link from "next/link";
import { UpdateProfileImage } from "@components/UpdateProfileImage/UpdateProfileImage";

function ProfilePageUI(data: FormValues) {
  const { imageUrl, form, handleSubmit, loading } = useProfilePageData(data);

  return (
    <Container size="sm" className="px-6 py-12">
      <Link href="/">
        <Button variant="outline" size="icon">
          <ArrowLeftIcon />
        </Button>
      </Link>

      <Title order={2} underline className="pb-6">
        Mi Perfil
      </Title>

      <Avatar className="mx-auto size-40">
        <AvatarImage src={imageUrl} />
        <AvatarFallback>
          <Title order={2}>{data.firstName?.[0] || "R"}</Title>
        </AvatarFallback>
      </Avatar>

      <Container className="pb-8 pt-4 text-center">
        <UpdateProfileImage />
      </Container>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Form {...form}>
          <Container className="flex flex-col gap-4">
            <Container className="flex flex-col gap-2">
              <Text className="text-sm font-semibold">Tipo de cuenta</Text>
              <Text className="border-gray-dark cursor-not-allowed border-2 px-3 py-2 text-sm opacity-60">
                {data.role}
              </Text>
            </Container>

            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Apellido</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo electrónico</FormLabel>
                  <FormControl>
                    <Input disabled type="email" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="genres"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Géneros</FormLabel>
                  <FormControl>
                    <MultiSelector
                      values={field.value ?? []}
                      onValuesChange={field.onChange}
                    >
                      <MultiSelectorTrigger>
                        <MultiSelectorInput />
                      </MultiSelectorTrigger>
                      <MultiSelectorContent>
                        <MultiSelectorList>
                          {genresListOptions.map((genre) => (
                            <MultiSelectorItem
                              key={genre.value}
                              value={genre.value}
                            >
                              {genre.label}
                            </MultiSelectorItem>
                          ))}
                        </MultiSelectorList>
                      </MultiSelectorContent>
                    </MultiSelector>
                  </FormControl>
                </FormItem>
              )}
            />
          </Container>

          <Container className="py-12 text-center">
            <Button type="submit" loading={loading}>
              Guardar cambios
            </Button>
          </Container>
        </Form>
      </form>
    </Container>
  );
}

export { ProfilePageUI };
