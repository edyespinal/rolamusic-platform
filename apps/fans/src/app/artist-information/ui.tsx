import Image from "next/image";
import Link from "next/link";
import { Button, Container, Text, Title, Underline } from "@rola/ui/components";
import RolaLogo from "@assets/img/logo-rola-home.png";
import Apoyo from "@assets/img/t_apoyo.png";
import Gestion from "@assets/img/t_gestion.png";
import Financiacion from "@assets/img/t_financiacion.png";
import ManWithBass from "@assets/img/man-with-bass.png";
import RolaOnPhone from "@assets/img/artists-rola-on-phone.png";

function ArtistInformationPageUI() {
  return (
    <Container>
      <Container className="3xl:min-h-[800px] -mt-20 grid min-h-[100vh] place-items-center bg-[url(/static/img/artists-landing-header.jpg)] bg-cover bg-center bg-no-repeat lg:min-h-[60vh]">
        <div className="mx-auto flex flex-col items-center gap-8 lg:flex-row">
          <Image src={RolaLogo} alt="Rola logo" className="max-w-[60vw]" />
          <div>
            <Title className="mb-8 text-center font-normal uppercase lg:text-left">
              Conecta, comparte <br />y crece con tu música
            </Title>
            <a
              href="https://artists.rolamusic.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Container className="text-center lg:text-left">
                <Button>Cuenta de artista</Button>
              </Container>
            </a>
          </div>
        </div>
      </Container>

      <Container
        size="xl"
        className="flex pb-24 pt-12 text-center lg:min-h-[50vh] lg:pt-12 lg:text-left xl:min-h-[auto]"
      >
        <Container className="space-y-8 px-4">
          <div className="flex flex-col gap-4">
            <Image src={Apoyo} alt="Apoyo" className="z-10" />
            <div className="-mt-14">
              <Underline align="left" />
            </div>
            <Text>
              Conecta con una comunidad de artistas, comparte experiencias,
              colabora en proyectos, obtén consejos de profesionales y expande
              tu red de contactos en la industria musical.
            </Text>
          </div>
          <div className="flex flex-col gap-4">
            <Image src={Gestion} alt="Gestión" className="z-10" />
            <div className="-mt-6">
              <Underline align="left" />
            </div>
            <Text>
              Accede a herramientas y recursos necesarios para gestionar y
              llevar tu carrera al siguiente nivel desde la palma de tu mano.
            </Text>
          </div>
          <div className="flex flex-col gap-4">
            <Image src={Financiacion} alt="Financiación" className="z-10" />
            <div className="-mt-8">
              <Underline align="left" />
            </div>
            <Text>
              Alcanza tus objetivos financieros gracias al soporte de una
              comunidad de fans, en la que trabajaremos juntos para que sea cada
              vez más grande y puedas expandir tu talento sin que esto suponga
              un gasto adicional para ti.
            </Text>
          </div>
        </Container>
        <Image
          src={ManWithBass}
          alt="Hombre con auriculares"
          className="ml-24 hidden grow lg:block"
          style={{
            height: "auto",
            minWidth: "540px",
          }}
        />
      </Container>

      <div className="-mt-12 h-auto w-full bg-transparent lg:hidden">
        <Image
          src={RolaOnPhone}
          alt="Rola en móvil"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>

      <Container
        size="lg"
        className="min-h-[50vh] py-12 lg:flex lg:justify-between lg:pb-0 xl:min-h-[auto]"
      >
        <div className="-mb-[1px]">
          <Image
            src={RolaOnPhone}
            alt="Rola en móvil"
            className="-mt-16 hidden lg:block"
            style={{
              height: "auto",
              width: "500px",
            }}
          />
        </div>
        <div className="flex items-start lg:max-w-[50%]">
          <div className="px-4 text-center lg:text-right">
            <Title order={2} underline className="mb-4 uppercase">
              ¿Estás listo?
            </Title>

            <Text>
              Te acompañaremos en cada paso y te ayudaremos a conseguir tus
              objetivos, al igual que ampliar tus seguidores y con ello tus
              beneficios.
            </Text>

            <div className="py-12">
              <Link
                href="https://artists.rolamusic.app/auth/login"
                target="_blank"
              >
                <Button size="lg" className="py-1">
                  Quiero impulsar <br /> mi carrera musical
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export { ArtistInformationPageUI };
