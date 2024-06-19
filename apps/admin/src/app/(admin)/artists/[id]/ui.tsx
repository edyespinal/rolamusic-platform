"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Artist, ArtistCommunity, User } from "@rola/services/schemas";
import { provincesOptions, years } from "@rola/services/utils";
import {
  Button,
  FileInput,
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
  Switch,
  Textarea,
  useToast,
} from "@rola/ui/components";
import { Container } from "../../../components/Container";
import { services } from "@rola/services/firebase";

type PageProps = {
  artist: Artist;
  admin: User;
  community: ArtistCommunity;
};

type FormValues = {
  artist: Artist;
  community: ArtistCommunity;
};

function ArtistPageUI({ admin, artist, community }: PageProps) {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    defaultValues: {
      artist,
      community,
    },
  });

  const [profileImgUrl, setProfileImgUrl] = React.useState(artist.profileURL);
  const [coverImgUrl, setCoverImgUrl] = React.useState(artist.coverURL);
  const [isUploading, setIsUploading] = React.useState(false);

  async function uploadProfileImage(files: File[]) {
    setIsUploading(true);

    const imagUrl = await services.updateArtistProfileImage(
      artist.id,
      files[0] as File
    );

    setProfileImgUrl(imagUrl);
    setIsUploading(false);

    toast({
      title: "Imagen de perfil actualizada",
      description: "Imagen de perfil actualizada correctamente",
    });
  }

  async function uploadCoverImage(files: File[]) {
    setIsUploading(true);

    const imagUrl = await services.updateArtistCoverImage(
      artist.id,
      files[0] as File
    );

    setCoverImgUrl(imagUrl);
    setIsUploading(false);

    toast({
      title: "Imagen de perfil actualizada",
      description: "Imagen de perfil actualizada correctamente",
    });
  }

  async function onSubmit(values: FormValues) {
    try {
      await services.updateArtist(artist.id, values.artist);
      await services.updateCommunity(artist.id, values.community);

      toast({
        title: "Artista actualizado",
        description: "Artista actualizado correctamente",
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);

      toast({
        title: "Error",
        description: "No se pudo actualizar el artista",
        variant: "destructive",
      });
    }
  }

  return (
    <Container>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="artist.active"
            render={({ field }) => (
              <FormItem className="flex items-center gap-4">
                <FormLabel>Activo</FormLabel>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="artist.name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Nombre" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="Administrador"
              value={admin.displayName}
              disabled
            />

            <Input placeholder="Email" value={admin.email} disabled />
          </div>

          <FormField
            control={form.control}
            name="artist.bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea placeholder="Bio" rows={5} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="artist.location.province"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Provincia</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue>{field.value}</SelectValue>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {provincesOptions.map((provincia) => (
                        <SelectItem
                          value={provincia.value}
                          key={provincia.value}
                        >
                          {provincia.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="artist.year"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Year</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue>{field.value}</SelectValue>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {years.map((year) => (
                        <SelectItem value={year} key={year}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="artist.genres"
            render={({ field }) => (
              <FormItem>
                <div className="">
                  <FormLabel>Genres</FormLabel>
                </div>
                <div className="flex gap-4">
                  <FormControl>
                    <Input disabled placeholder="Genres" value={field.value} />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <p className="pb-8 pt-16 text-center text-lg font-semibold">
            Información de Comunidad
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <FormField
                control={form.control}
                name="community.videoURL"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Video de presentación</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://www.youtube.com/watch?v=..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {community.videoURL && (
                <Image
                  src={`https://img.youtube.com/vi/${
                    community.videoURL?.split("v=")[1]?.split("&")[0]
                  }/0.jpg`}
                  width={480}
                  height={360}
                  alt="Video de apadrinamiento"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              )}
            </div>
            <div>
              <FormField
                control={form.control}
                name="community.songs"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Canciones</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://open.spotify.com/track/..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="text-center">
            <Button type="submit">Guardar</Button>
          </div>
        </form>
      </Form>

      <p className="pb-8 pt-16 text-center text-lg font-semibold">Imágenes</p>
      <div className="grid gap-x-4 lg:grid-cols-2">
        <div className="flex flex-col gap-4 justify-center items-center">
          <p className="text-center text-lg font-semibold">Imagen de perfil</p>
          <div className="size-48">
            {profileImgUrl ? (
              <Image
                src={profileImgUrl}
                width={200}
                height={200}
                alt="Imagen de perfil"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            ) : (
              <p>Sin imagen</p>
            )}
          </div>

          <FileInput
            maxFiles={1}
            maxSize={1024 * 1024 * 2}
            onUpload={uploadProfileImage}
            disabled={isUploading}
          />
        </div>

        <div className="flex flex-col gap-4 justify-center items-center">
          <p className="text-center text-lg font-semibold">Portada</p>
          <div className="size-48">
            {coverImgUrl ? (
              <Image
                src={coverImgUrl}
                width={200}
                height={200}
                alt="Portada"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            ) : (
              <p>Sin imagen</p>
            )}
          </div>
          <FileInput
            maxFiles={1}
            maxSize={1024 * 1024 * 2}
            onUpload={uploadCoverImage}
            disabled={isUploading}
          />
        </div>
      </div>
    </Container>
  );
}

export { ArtistPageUI };
