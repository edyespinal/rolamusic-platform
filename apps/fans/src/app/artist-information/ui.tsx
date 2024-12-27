import Image from "next/image";
import Link from "next/link";
import { Button, Container, Text, Title, Underline } from "@rola/ui/components";
import { cn } from "@rola/tailwind-config/utils";
import RolaLogo from "@assets/img/logo-hand.png";
import LineV from "@assets/img/linea-v.png";
import Singer from "@assets/img/artist-info-section-2.png";
import Musicians from "@assets/img/artist-info-section-4.png";

function ArtistInformationPageUI() {
  return (
    <Container>
      <Container
        className={cn(
          "z-0 flex min-h-[100vh] items-start justify-center bg-cover bg-center bg-no-repeat",
          "bg-[url('/static/img/artist-info-header-mobile.png')] lg:bg-[url('/static/img/artist-info-header.png')]",
          "3xl:min-h-[800px] -mt-20 lg:min-h-[75vh]"
        )}
      >
        <Container
          size="lg"
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
              Conecta con tus fans <br />
              Comparte <br />y crece con tu música
            </Title>
            <div className="flex gap-4">
              <a
                href="https://artists.rolamusic.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Ver artistas</Button>
              </a>
              <a
                href="https://artists.rolamusic.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary">Ver artistas</Button>
              </a>
            </div>
          </div>
        </Container>
      </Container>

      <Container className="bg-background-dark z-10">
        <Container
          size="lg"
          className="flex min-h-[50vh] flex-col pb-0 pt-24 lg:flex-row lg:justify-between xl:min-h-[auto]"
        >
          <Container className="z-20 flex-1 pb-24">
            <Title type="rola" order={2} align="left" className="mb-8">
              Apoyo, gestión y financiación para artistas musicales
            </Title>
            <Text className="mb-4">
              En ROLA puedes alcanzar tus objetivos financieros gracias al
              soporte de una comunidad de fans, en la que trabajaremos juntos
              para que sea cada vez más grande y puedas expandir y hacer crecer
              tu proyecto.
            </Text>

            <a
              href="https://artists.rolamusic.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Crear mi comunidad de fans</Button>
            </a>
          </Container>
          <Image
            src={Singer}
            alt="Cantante"
            className="-mr-12 -mt-48 hidden flex-none lg:block"
            style={{
              maxWidth: "400px",
              height: "auto",
            }}
          />

          <Image
            src={Singer}
            alt="Cantante"
            className="z-10 -mt-8 block lg:hidden"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Container>
      </Container>

      <Container className="bg-[url('/static/img/artist-info-section-3.png')] bg-cover bg-center bg-no-repeat py-32">
        <Container size="lg" className="px-4">
          <Title type="rola" order={2} className="mb-8 text-black">
            Comparte el contenido que quieras y olvídate de seguir tendencias y
            algoritmos.
          </Title>
          <Text className="mb-4 text-center">
            Se tu mismo, este es un espacio donde los artistas pueden expresarse
            y compartir lo que realmente son y conectar con una comunidad que
            valora y apoya su talento.
          </Text>
          <div className="text-center">
            <a
              href="https://artists.rolamusic.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary">Crear mi cuenta de artista</Button>
            </a>
          </div>
        </Container>
      </Container>

      <Container className="bg-background-dark z-10">
        <Container
          size="lg"
          className="flex min-h-[50vh] flex-col px-4 pb-0 pt-20 lg:flex-row lg:justify-between lg:px-0 xl:min-h-[auto]"
        >
          <Image
            src={Musicians}
            alt="Artistas"
            className="-ml-32 -mt-40 mr-8 hidden lg:block"
            style={{
              maxWidth: "600px",
              height: "auto",
            }}
          />
          <div className="z-20 pb-20 text-center lg:max-w-[50%] lg:flex-none lg:text-right">
            <Title type="rola" order={2} className="mb-8">
              Gana dinero con tu música e impulsa tu carrera.
            </Title>
            <Text className="mb-4">
              Con ROLA puedes obtener ingresos recurrentes a través de la
              suscripción de los fans a tu comunidad y generar otros ingresos
              con las actividades que realizamos para potenciar tu proyecto
              musical.
            </Text>

            <a
              href="https://artists.rolamusic.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Comenzar</Button>
            </a>
          </div>

          <Image
            src={Musicians}
            alt="Artistas"
            className="z-10 -mt-8 block lg:hidden"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Container>
      </Container>
    </Container>
  );
}

export { ArtistInformationPageUI };
