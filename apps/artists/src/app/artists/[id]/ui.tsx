"use client";

import React from "react";
import Image from "next/image";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
  Loader,
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Text,
  Textarea,
  Title,
  Underline,
} from "@rola/ui/components";
import { PlusIcon, XIcon } from "@rola/ui/icons";
import { UTUploadButton } from "../../../utils/uploadthing";
import { Artist } from "@rola/services/schemas";
import {
  countries,
  countriesOptions,
  genresListOptions,
  states,
  statesOptions,
  years,
} from "@rola/services/utils";
import { useArtistData } from "./data";
import { InactiveArtistAlert } from "./_components/InactiveArtist";

function ArtistPageUI({ userId, artist }: { userId: string; artist: Artist }) {
  const {
    form,
    imageUrls,
    setImageUrls,
    members,
    addMember,
    removeMember,
    handleSubmit,
    isLoading,
  } = useArtistData(artist);

  return (
    <Container className="pb-24">
      {!artist.active && <InactiveArtistAlert />}

      <Container className="pb-12">
        <Title order={2} align="left" underline>
          Información del artista
        </Title>
      </Container>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Form {...form}>
          <Title
            order={5}
            align="left"
            className="text-brand mb-4 font-semibold uppercase"
          >
            Información del artista
          </Title>

          <Container className="grid gap-4 pb-4 lg:grid-cols-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Correo electrónico</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      required
                      placeholder="Correo electrónica de contacto"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </Container>

          <Container className="grid gap-4 pb-8 lg:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Nombre de artista</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      required
                      placeholder="Nombre del artista"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="year"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Año de inicio</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    required
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue>{field.value}</SelectValue>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {years.map((year) => (
                        <SelectItem key={year} value={year}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location.state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Provincia</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue>{states[field.value]}</SelectValue>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {statesOptions.map((state) => (
                        <SelectItem value={state.value} key={state.value}>
                          {state.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location.country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>País</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue>{countries[field.value]}</SelectValue>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {countriesOptions.map((state) => (
                        <SelectItem value={state.value} key={state.value}>
                          {state.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="genres"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Géneros</FormLabel>
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

          <Container className="grid gap-4 pb-8 lg:grid-cols-2">
            <Container className="flex flex-col items-center justify-center gap-4">
              <Text>Imagen de perfil</Text>
              <Container className="border-gray flex h-96 flex-col items-center justify-center gap-4 rounded border-2 border-dashed p-4">
                {imageUrls.profileURL && (
                  <div className="relative size-96">
                    <Image
                      src={imageUrls.profileURL}
                      alt="Imagen de perfil"
                      objectFit="contain"
                      fill
                    />
                  </div>
                )}
                <UTUploadButton
                  endpoint="artistProfileImage"
                  input={{
                    userId,
                    artistId: artist.id,
                    profileUrl: imageUrls.profileURL ?? "",
                  }}
                  content={{
                    button({ isUploading }) {
                      if (isUploading) {
                        return <Loader size="xs" />;
                      }

                      return "Subir imagen";
                    },
                    allowedContent({ isUploading, uploadProgress }) {
                      if (isUploading) {
                        return `${uploadProgress}%`;
                      }

                      return "Tamaño máximo: 512KB";
                    },
                  }}
                  onBeforeUploadBegin={(files) => {
                    if (files[0] && files[0]?.size > 512 * 1024) {
                      return [];
                    }

                    return files;
                  }}
                  onClientUploadComplete={(res) => {
                    setImageUrls({
                      ...imageUrls,
                      profileURL: res[0]?.url,
                    });
                  }}
                  onUploadError={(error) => {
                    console.error("onUploadError", error);
                  }}
                />
              </Container>
            </Container>

            <Container className="flex flex-col items-center justify-center gap-4">
              <Text>Imagen de portada</Text>
              <Container className="border-gray flex h-96 flex-col items-center justify-center gap-4 rounded border-2 border-dashed p-4">
                {imageUrls.coverURL && (
                  <div className="relative size-96">
                    <Image
                      src={imageUrls.coverURL}
                      alt="Imagen de portada"
                      objectFit="contain"
                      fill
                    />
                  </div>
                )}
                <UTUploadButton
                  endpoint="artistCoverImage"
                  input={{
                    userId,
                    artistId: artist.id,
                    coverUrl: imageUrls.coverURL ?? "",
                  }}
                  content={{
                    button({ isUploading }) {
                      if (isUploading) {
                        return <Loader size="xs" />;
                      }

                      return "Subir imagen";
                    },
                    allowedContent({ isUploading, uploadProgress }) {
                      if (isUploading) {
                        return `${uploadProgress}%`;
                      }

                      return "Tamaño máximo: 4MB";
                    },
                  }}
                  onBeforeUploadBegin={(files) => {
                    if (files[0] && files[0]?.size > 4 * 1024 * 1024) {
                      return [];
                    }

                    return files;
                  }}
                  onClientUploadComplete={(res) => {
                    setImageUrls({
                      ...imageUrls,
                      coverURL: res[0]?.url,
                    });
                  }}
                  onUploadError={(error) => {
                    console.error("onUploadError", error);
                  }}
                />
              </Container>
            </Container>
          </Container>

          <Container className="pb-8">
            <Container className="mb-8">
              <Title order={3} className="uppercase">
                Acerca de {artist.name}
              </Title>
              <Underline />
            </Container>

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Acerca de {artist.name}</FormLabel>
                  <FormControl>
                    <Textarea required {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </Container>

          <Title
            order={5}
            align="left"
            className="text-brand mb-4 font-semibold uppercase"
          >
            Integrantes
          </Title>

          {members.map((member, index) => (
            <Container
              key={index}
              size="full"
              className="flex items-end gap-4 pb-4"
            >
              <FormField
                key={member.id}
                control={form.control}
                name={`members.${index}.name`}
                render={({ field }) => (
                  <FormItem className="grow">
                    <FormLabel>Integrante {index + 1}</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Integrante" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                key={index}
                control={form.control}
                name={`members.${index}.role`}
                render={({ field }) => (
                  <FormItem className="grow">
                    <FormLabel>Rol</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Rol" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button
                type="button"
                variant="destructive"
                size="icon"
                onClick={() => removeMember(index)}
              >
                <XIcon />
              </Button>
            </Container>
          ))}

          <Button
            type="button"
            size="xs"
            variant="outline"
            onClick={() => addMember({ name: "", role: "" })}
          >
            <PlusIcon />
            Agregar integrante
          </Button>

          <Container className="mt-12 text-center">
            <Button type="submit" loading={isLoading}>
              Actualizar
            </Button>
          </Container>
        </Form>
      </form>
    </Container>
  );
}

export { ArtistPageUI };
