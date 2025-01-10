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
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Title,
  Underline,
} from "@rola/ui/components";
import { PlusIcon, XIcon } from "@rola/ui/icons";
import { useNewArtistData } from "./data";
import {
  statesOptions,
  yearsOptions,
} from "../../../../../../packages/services/src/utils";

function NewArtistPageUI({ userEmail }: { userEmail?: string }) {
  const { form, handleOnSubmit, fields, append, remove, isLoading } =
    useNewArtistData(userEmail);

  return (
    <Container size="lg">
      <Container className="pb-8">
        <Title order={3}>Crea el perfil de tu nuevo artista</Title>
        <Underline />
      </Container>

      <Container size="full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleOnSubmit)}>
            <Title order={5} align="left" className="text-brand pb-4 uppercase">
              Información del artista
            </Title>
            <Container size="full" className="grid gap-4 pb-12 lg:grid-cols-2">
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
                name="location.state"
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
                          {statesOptions.map((state) => (
                            <SelectItem key={state.value} value={state.value}>
                              {state.label}
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

            <Title order={5} align="left" className="text-brand pb-4 uppercase">
              Integrantes
            </Title>

            {fields.map((member, index) => (
              <Container
                size="full"
                key={member.id}
                className="flex items-end gap-4 pb-4"
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
                  <XIcon />
                </Button>
              </Container>
            ))}

            <Button
              type="button"
              size="icon"
              variant="outline"
              onClick={() => append({ name: "", role: "" })}
            >
              <PlusIcon />
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
