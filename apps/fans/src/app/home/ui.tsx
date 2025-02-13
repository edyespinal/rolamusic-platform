import Image from "next/image";
import Link from "next/link";
import {
  AspectRatio,
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  Container,
  Text,
  Title,
} from "@rola/ui/components";
import RolaLogo from "@assets/img/logo-hand.png";
import LineV from "@assets/img/linea-v.png";
import Curilero from "@assets/img/landing-section-2.png";
import { cn } from "@rola/tailwind-config/utils";
import { highlightedArtists } from "./data";

function HomePageUI() {
  return (
    <Container>
      <Container
        className={cn(
          "z-0 flex min-h-[100vh] items-start justify-center bg-cover bg-center bg-no-repeat",
          "bg-[url('/static/img/landing-header-mobile.png')] lg:bg-[url('/static/img/landing-header.png')]",
          "3xl:min-h-[800px] -mt-20 lg:min-h-[75vh]"
        )}
      >
        <Container
          size="xl"
          className="mt-36 flex flex-col items-start justify-center px-4 lg:flex-row lg:px-0"
        >
          <div className="mx-auto flex flex-col items-center lg:mx-0 lg:flex-row lg:gap-4">
            <Image
              src={RolaLogo}
              alt="Rola"
              className="lg:mb-0 lg:mr-12"
              style={{
                maxWidth: "250px",
                height: "auto",
              }}
            />
            <Image
              src={LineV}
              alt="Línea"
              className="-my-8 rotate-90 lg:my-0 lg:mr-12 lg:block lg:rotate-0"
              style={{
                maxWidth: "100%",
                maxHeight: "100px",
              }}
            />
          </div>
          <div>
            <Title
              order={4}
              className="mb-8 text-center font-normal uppercase lg:text-left"
            >
              Conoce nuevos artistas <br />
              Disfruta de su música y su contenido exclusivo <br />
              Forma parte de su comunidad
            </Title>
            <div className="text-center lg:text-left">
              <Link href="/artists" prefetch>
                <Button>Ver artistas</Button>
              </Link>
            </div>
          </div>
        </Container>
      </Container>

      <Container className="bg-background-dark z-10">
        <Container
          size="xl"
          className="flex min-h-[50vh] flex-col px-4 pb-0 pt-24 lg:flex-row lg:px-0 xl:min-h-[auto]"
        >
          <Image
            src={Curilero}
            alt="Rola en móvil"
            className="-mt-48 hidden lg:block"
            style={{
              maxWidth: "600px",
              height: "auto",
            }}
          />
          <div className="z-20 lg:-ml-24 lg:max-w-[50%] lg:flex-none">
            <Title type="rola" order={2} align="left" className="mb-8">
              Conecta con la música de una manera especial
            </Title>
            <Text className="mb-4">
              Apoyar y ver crecer a tus artistas favoritos es es solo uno de los
              beneficios de pertenecer a su comunidad, también accedes a
              contenido,, merchandising y eventos creados única y especialmente
              para ti.
            </Text>

            <Link href="/artists" prefetch>
              <Button>Conectar</Button>
            </Link>
          </div>

          <Image
            src={Curilero}
            alt="Rola en móvil"
            className="z-10 -mt-8 block lg:hidden"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Container>
      </Container>

      <Container className="bg-[url('/static/img/landing-section-3.png')] bg-cover bg-center bg-no-repeat py-32">
        <Container size="xl" className="px-4">
          <Title type="rola" order={2} className="mb-8 text-black">
            ¿Y si ese artista que tanto te inspira es el próximo gran exponente
            de la música?
          </Title>
          <Text className="mb-4 text-center">
            Muchos talentos quedan en el camino por falta de recursos, pero hoy
            tú puedes marcar la diferencia. <br /> Apoya e impulsa a los músicos
            independientes y se parte del cambio en su historia.
          </Text>
          <div className="text-center">
            <Link href="/artists" prefetch>
              <Button variant="secondary">Quiero apoyar</Button>
            </Link>
          </div>
        </Container>
      </Container>

      <Container
        size="xl"
        className="flex flex-col items-center gap-16 px-4 py-24 lg:flex-row"
      >
        <Container className="lg:w-2/5">
          <Title type="rola" order={3} className="mb-8 lg:text-left">
            Descubre nuevos artistas y disfruta de su música.
          </Title>

          <Text className="pb-8 text-center lg:text-left">
            Hay mucha música y talento por descubrir. Aquí puedes conectar de
            manera rápida y directa con la escena musical independiente y
            encontrar tu próximo artista favorito.
          </Text>
          <div className="text-center lg:text-left">
            <Link href="/artists" prefetch>
              <Button>Descubrir</Button>
            </Link>
          </div>
        </Container>

        <Container className="lg:w-3/5">
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {highlightedArtists.map(({ id, url, alt }, i) => (
                <CarouselItem key={i} className="lg:basis-1/3">
                  <AspectRatio ratio={2 / 3}>
                    <Image
                      src={url}
                      alt={alt}
                      fill
                      className="bg-brand h-full w-full rounded-lg object-cover"
                    />
                  </AspectRatio>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious className="left-2 lg:-left-12" />
            <CarouselNext className="right-2 lg:-right-12" /> */}
          </Carousel>
        </Container>
      </Container>
    </Container>
  );
}

export { HomePageUI };
