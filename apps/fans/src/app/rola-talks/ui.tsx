"use client";

import { PodcastEpisode } from "@rola/services/schemas";
import {
  AspectRatio,
  Button,
  Container,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Icon,
  Input,
  Text,
  Title,
} from "@rola/ui/components";
import Image from "next/image";
import { useRolaTalksData } from "./data";
import { PageHeader } from "@components/PageHeader/PageHeader";

function RolaTalksPageUI({ episodes }: { episodes: PodcastEpisode[] }) {
  const { form, handleSubmit, isLoading } = useRolaTalksData(episodes);

  return (
    <Container>
      <PageHeader background="bg-[url('/static/img/talks-header.png')]">
        <Container size="md" className="flex h-full items-center">
          <Title type="rola" order={1} align="left">
            El podcast de <br />
            la música independiente
          </Title>
        </Container>
      </PageHeader>

      <Container size="md" className="py-12">
        <Container className="flex flex-col gap-4 pb-12">
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
            dan forma a su sonido único.
          </Text>
        </Container>

        <Title order={2} underline className="mb-4 font-normal">
          Destacados
        </Title>

        <Container className="grid grid-cols-3 items-start gap-8 pb-12">
          {episodes.map((episode) => (
            <div
              key={episode.id}
              className="flex basis-1/3 flex-col justify-center gap-4"
            >
              <a href={episode.url} target="_blank" rel="noopener noreferrer">
                <AspectRatio
                  ratio={4 / 3}
                  className="relative hover:opacity-80"
                >
                  <Image
                    src={`https://img.youtube.com/vi/${episode.id}/0.jpg`}
                    alt={episode.title}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    width={400}
                    height={300}
                  />
                  <Icon
                    name="play-circle"
                    size={64}
                    strokeWidth={1.5}
                    className="text-brand absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1"
                  />
                </AspectRatio>
              </a>
              <Text className="text-primary text-brand line-clamp-2 text-left text-sm font-semibold">
                {`ROLA Talks | ${episode.guest && `${episode.guest} · `} ${
                  episode.title
                } - ${episode.number.toString().padStart(2, "0")}`}
              </Text>
            </div>
          ))}
        </Container>

        <Container className="text-center">
          <a
            href="https://youtube.com/playlist?list=PLCyrtUMjK4nHoJ-wwPSMvn15bZWyJfhqW&si=RhdqusjGWyfun9xE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Ver más</Button>
          </a>
        </Container>
      </Container>

      <Container className="bg-[url('/static/img/talks-form.png')] bg-cover bg-center bg-no-repeat py-24">
        <Container size="md">
          <Title type="rola" order={2} className="mb-8 text-center text-black">
            ¿Te gustaría participar <br /> en un episodio de ROLA Talks?
          </Title>

          <Container className="flex flex-col gap-4">
            <Text>
              Rellena el siguiente formulario para que podamos invitarte a
              grabar un episodio con nosotros y conocer tu historia de primera
              mano.
            </Text>

            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <Form {...form}>
                <Container className="grid gap-x-12 gap-y-8 pb-16 lg:grid-cols-2">
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
                    name={"link"}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="url"
                            placeholder="Link de Spotify o YouTube"
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
                            placeholder="Perfil de Instagram"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </Container>

                <Container className="text-center">
                  <Button type="submit" variant="secondary" loading={isLoading}>
                    Enviar
                  </Button>
                </Container>
              </Form>
            </form>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}

export { RolaTalksPageUI };
