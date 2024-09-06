"use client";

import {
  Alert,
  Button,
  Container,
  FileInput,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Icon,
  Input,
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
import { Artist, ArtistCommunity } from "@rola/services/schemas";
import {
  genresListOptions,
  provinces,
  provincesOptions,
  years,
} from "@rola/services/utils";
import { useArtistData } from "./data";
import Image from "next/image";

function ArtistPageUI({
  artist,
  community,
}: {
  artist: Artist;
  community: ArtistCommunity;
}) {
  const { form, members, addMember, removeMember, handleSubmit, isLoading } =
    useArtistData(artist, community);

  return (
    <Container className="pb-24">
      <Container className="pb-12">
        <Title order={2} align="left">
          Información del artista
        </Title>
        <Underline align="left" />
      </Container>

      {!artist.active && (
        <Container className="mb-8">
          <Alert variant="destructive" title="Artista inactivo">
            Este artista no está activo en la plataforma.
          </Alert>
        </Container>
      )}

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Form {...form}>
          <Title
            order={5}
            align="left"
            className="text-brand uppercase font-semibold mb-4"
          >
            Información del artista
          </Title>

          <Container className="grid lg:grid-cols-2 gap-4 pb-4">
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
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </Container>

          <Container className="grid lg:grid-cols-2 gap-4 pb-8">
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
                      {...field}
                    />
                  </FormControl>
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
                      values={field.value}
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
            <FormField
              control={form.control}
              name="year"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Año de inicio</FormLabel>
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
              name="province"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Provincia</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue>{provinces[field.value]}</SelectValue>
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
                </FormItem>
              )}
            />

            <Container className="flex flex-col gap-4 justify-center items-center">
              <Text>Imagen de perfil</Text>
              <Container className="size-48">
                {artist.profileURL ? (
                  <Image
                    src={artist.profileURL}
                    width={200}
                    height={200}
                    alt="Imagen de perfil"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                ) : (
                  <Text>No hay imagen de perfil</Text>
                )}
              </Container>

              <FileInput
                maxFiles={1}
                maxSize={1024 * 1024 * 2}
                disabled={isLoading}
              />
            </Container>

            <Container className="flex flex-col gap-4 justify-center items-center">
              <Text>Imagen de portada</Text>
              <Container className="size-48">
                {artist.coverURL ? (
                  <Image
                    src={artist.coverURL}
                    width={200}
                    height={200}
                    alt="Imagen de portada"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                ) : (
                  <Text>No hay imagen de portada</Text>
                )}
              </Container>

              <FileInput
                maxFiles={1}
                maxSize={1024 * 1024 * 2}
                disabled={isLoading}
              />
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
                  <FormLabel>Acerca de {artist.name}</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </Container>

          <Title
            order={5}
            align="left"
            className="text-brand uppercase font-semibold mb-4"
          >
            Integrantes
          </Title>

          {members.map((_member, index) => (
            <Container
              key={index}
              size="full"
              className="flex gap-4 items-end pb-4"
            >
              <FormField
                key={index}
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
                <Icon name="x" />
              </Button>
            </Container>
          ))}

          <Button
            type="button"
            size="icon"
            variant="outline"
            onClick={() => addMember({ name: "", role: "" })}
          >
            <Icon name="plus" />
          </Button>

          <Container className="text-center mt-12">
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
