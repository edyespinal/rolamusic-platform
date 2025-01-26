"use client";

import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormDescription,
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
  Textarea,
  Title,
} from "@rola/ui/components";
import { ArtistSubscriptionTier } from "@rola/services/schemas";
import { postTypesLabels, postTypesOptions } from "@rola/services/utils";
import { UploadButton } from "@components/UploadButton/UploadButton";
import { useNewArtistPostData } from "./data";
import Image from "next/image";
import { POST_TYPES } from "@rola/services/constants";

function NewArtistPostPageUI({
  artistId,
  postId,
  tiers,
}: {
  artistId: string;
  postId: string;
  tiers: Pick<ArtistSubscriptionTier, "access" | "label">[];
}) {
  const {
    form,
    handleSubmit,
    type,
    setType,
    imageUrl,
    onBeforeUploadBegin,
    onUploadComplete,
    onUploadError,
    isLoading,
  } = useNewArtistPostData(artistId, postId);

  return (
    <Container>
      <Title order={2} align="left" underline className="pb-12">
        Nueva Publicación
      </Title>

      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <Form {...form}>
          <Container className="flex flex-row gap-4">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="lg:w-1/2">
                  <FormLabel required>Tipo</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={(value) => {
                        console.log({ value });

                        setType(value as keyof typeof postTypesLabels);

                        if (value === POST_TYPES.TEXT) {
                          form.setValue("url", undefined);
                        } else {
                          form.setValue("url", "");
                        }

                        return field.onChange(value);
                      }}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue>
                          {postTypesLabels[field.value]}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {postTypesOptions.map((type) => (
                          <SelectItem value={type.value} key={type.value}>
                            {type.label}
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
              name="access"
              render={({ field }) => (
                <FormItem className="lg:w-1/2">
                  <FormLabel required>Acceso</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} required>
                      <SelectTrigger>
                        <SelectValue>
                          {
                            tiers.find((tier) => tier.access === field.value)
                              ?.label
                          }
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {tiers.map((tier) => (
                          <SelectItem
                            value={String(tier.access)}
                            key={tier.access}
                          >
                            {tier.label}
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

          <FormField
            name="title"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Título</FormLabel>
                <FormControl>
                  <Input required {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="caption"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Texto de la publicación</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {type === "IMAGE" && (
            <Container className="border-gray flex h-48 flex-col items-center justify-center gap-4 rounded border-2 border-dashed p-4">
              {imageUrl && (
                <div className="relative size-96">
                  <Image
                    src={imageUrl}
                    alt="Imagen de post"
                    objectFit="contain"
                    fill
                  />
                </div>
              )}
              <UploadButton
                endpoint="artistPostFile"
                buttonText="Subir imagen"
                maxSize="4MB"
                input={{
                  artistId,
                  postId,
                }}
                onBeforeUploadBegin={onBeforeUploadBegin}
                onClientUploadComplete={onUploadComplete}
                onUploadError={onUploadError}
              />
            </Container>
          )}

          {type === "VIDEO" && (
            <Container>
              <FormField
                name="url"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel required>URL del video (YouTube)</FormLabel>
                    <FormControl>
                      <Input required {...field} />
                    </FormControl>
                    <FormDescription>
                      Recuerda que el video debe estar publicado y tener la
                      visibilidad como privada.
                    </FormDescription>
                  </FormItem>
                )}
              />
            </Container>
          )}

          <Container className="pt-8 text-center">
            <Button type="submit" loading={isLoading}>
              Publicar
            </Button>
          </Container>
        </Form>
      </form>
    </Container>
  );
}

export { NewArtistPostPageUI };
