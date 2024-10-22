"use client";

import { PodcastEpisode } from "@rola/services/schemas";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
  Text,
  Title,
} from "@rola/ui/components";
import Image from "next/image";
import { useRolaTalksData } from "./data";

function RolaTalksPageUI({
  episodes,
  totalEpisodes,
}: {
  episodes: PodcastEpisode[];
  totalEpisodes: number;
}) {
  const { form, handleSubmit, isLoading } = useRolaTalksData(episodes);

  return (
    <Container className="pb-12">
      <Container className="3xl:min-h-[800px] -mt-20 h-[50vh] w-full bg-[url('/static/img/talks-header.jpg')] bg-cover bg-center bg-no-repeat lg:min-h-[75vh]"></Container>

      <Container size="xl" className="py-12">
        <Title order={2} underline className="mb-8">
          ROLA Talks
        </Title>
        <Container className="flex flex-col gap-4">
          <Text>
            En ROLA Talks exploramos el día a día de estos músicos, desde las
            largas horas de ensayo hasta las inspiraciones que dan vida a sus
            proyectos musicales. Nos sumergimos en el corazón de sus historias,
            descubriendo los altibajos, los desafíos y los momentos que han
            marcado su viaje creativo.
          </Text>
          <Text>
            Cada episodio es una ventana a la diversidad y la autenticidad de la
            música independiente. Conocemos el origen de sus proyectos, desde la
            chispa inicial de una idea hasta la confluencia de influencias que
            dan forma a su sonido único. Además, exploramos los obstáculos que
            han enfrentado en su camino, desde la lucha por la visibilidad hasta
            los desafíos en la producción y distribución de su música.
          </Text>
          <Text>
            En ROLA Talks celebramos las metas alcanzadas y las aspiraciones que
            impulsan a estos artistas. Desde pequeños logros hasta grandes
            hitos, cada paso es un testimonio del compromiso, la pasión y la
            dedicación que define a estos talentosos músicos.
          </Text>
        </Container>
      </Container>

      <Title order={3} underline className="mb-4 font-normal">
        Últimos episodios
      </Title>
      <Container size="xl" className="grid grid-cols-3 items-start gap-8 pb-12">
        {episodes.map((episode) => (
          <div
            key={episode.id}
            className="flex basis-1/3 flex-col justify-center gap-4 hover:brightness-125"
          >
            <a href={episode.url} target="_blank" rel="noopener noreferrer">
              <Image
                src={`https://img.youtube.com/vi/${episode.id}/0.jpg`}
                alt={episode.title}
                width={400}
                height={200}
              />
            </a>
            <Text className="text-primary line-clamp-2 text-left text-sm">
              {`ROLA Talks | ${episode.guest && `${episode.guest} · `} ${
                episode.title
              } - ${episode.number.toString().padStart(2, "0")}`}
            </Text>
          </div>
        ))}
      </Container>

      <Container size="xl">
        <Title order={3} underline className="mb-8 mt-24 text-center uppercase">
          ¿Te gustaría participar en un episodio de ROLA Talks?
        </Title>

        <Container className="flex flex-col gap-4">
          <Text>
            Este podcast está dedicado a amplificar voces emergentes y a dar a
            conocer la riqueza de la escena musical independiente. Cada episodio
            es una invitación a sumergirse en la creatividad, la innovación y la
            autenticidad que caracterizan a estos artistas que desafían los
            límites y rompen barreras en la búsqueda de su expresión artística.
          </Text>
          <Text>
            Únete a nosotros en ROLA Talks, donde la música independiente
            encuentra su voz y su espacio para brillar. Rellena el siguiente
            formulario para que podamos invitarte a grabar un episodio con
            nosotros y conocer tu historia de primera mano.
          </Text>

          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <Form {...form}>
              <Container className="grid gap-x-16 gap-y-8 pb-16 lg:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel required>Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu nombre" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel required>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Tu correo electrónico"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={"website"}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="url" placeholder="Sitio web" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={"youtube"}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="url"
                          placeholder="Canal de YouTube"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={"instagram"}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="url"
                          placeholder="Cuenta de Instagram"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={"twitter"}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="url"
                          placeholder="Cuenta de Twitter"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={"tiktok"}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="url"
                          placeholder="Cuenta de TikTok"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={"music"}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="url"
                          placeholder="Música (Spotify, Bandcamp, Apple Music, etc)"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </Container>

              <Container className="text-center">
                <Button type="submit" loading={isLoading}>
                  Enviar
                </Button>
              </Container>
            </Form>
          </form>
        </Container>
      </Container>
    </Container>
  );
}

export { RolaTalksPageUI };
