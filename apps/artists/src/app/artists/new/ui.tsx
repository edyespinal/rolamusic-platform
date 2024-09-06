"use client";

import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Icon,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Title,
  Underline,
} from "@rola/ui/components";
import { useNewArtistData } from "./data";
import { provincesOptions, yearsOptions } from "@rola/services/utils";

function NewArtistPageUI() {
  const { form, handleOnSubmit, fields, append, remove, isLoading } =
    useNewArtistData();

  return (
    <Container size="lg">
      <Container className="pb-8">
        <Title order={3}>Crea el perfil de tu nuevo artista</Title>
        <Underline />
      </Container>

      <Container size="full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleOnSubmit)}>
            <Title order={5} align="left" className="text-brand uppercase pb-4">
              Información del artista
            </Title>
            <Container size="full" className="grid lg:grid-cols-2 gap-4 pb-12">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel required>Nombre de artista</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Nombre del artista"
                        required
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel required>Correo electrónico</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Correo electrónico"
                        required
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="year"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Año de formación</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Año de formación" />
                        </SelectTrigger>
                        <SelectContent>
                          {yearsOptions.map((year) => (
                            <SelectItem key={year.value} value={year.value}>
                              {year.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location.province"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel required>Provincia</FormLabel>
                    <FormControl>
                      <Select
                        required
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Provincia" />
                        </SelectTrigger>
                        <SelectContent>
                          {provincesOptions.map((province) => (
                            <SelectItem
                              key={province.value}
                              value={province.value}
                            >
                              {province.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Container>

            <Title order={5} align="left" className="text-brand uppercase pb-4">
              Integrantes
            </Title>

            {fields.map((member, index) => (
              <Container
                size="full"
                key={member.id}
                className="flex gap-4 items-end pb-4"
              >
                <FormField
                  control={form.control}
                  name={`members.${index}.name`}
                  render={({ field }) => (
                    <FormItem className="grow">
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Nombre" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`members.${index}.role`}
                  render={({ field }) => (
                    <FormItem className="grow">
                      <FormLabel>Rol</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Rol" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="button"
                  size="icon"
                  variant="destructive"
                  onClick={() => remove(index)}
                >
                  <Icon name="x" />
                </Button>
              </Container>
            ))}

            <Button
              type="button"
              size="icon"
              variant="outline"
              onClick={() => append({ name: "", role: "" })}
            >
              <Icon name="plus" />
            </Button>

            <Container className="text-center">
              <Button type="submit" loading={isLoading}>
                Crear perfil
              </Button>
            </Container>
          </form>
        </Form>
      </Container>
    </Container>
  );
}

export { NewArtistPageUI };
