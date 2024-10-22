import Image from "next/image";
import Link from "next/link";
import { Button, Container, Text, Title } from "@rola/ui/components";
import { Footer } from "@components/Footer/Footer";
import { Header } from "@components/Header/Header";
import rolaLogo from "@assets/img/logo-rola-home.png";
import ManWithHeadphones from "@assets/img/man-with-headphones.png";
import RolaOnPhone from "@assets/img/rola-on-phone.png";
import GuitarIcon from "@assets/img/icons/guitar.svg";
import ThumbsUpIcon from "@assets/img/icons/thumbs-up.svg";
import RockHandIcon from "@assets/img/icons/rock-hand.svg";

function HomePageUI() {
  return (
    <Container>
      <Container className="3xl:min-h-[800px] z-0 -mt-20 grid min-h-[100vh] place-items-center bg-[url('/static/img/landing-header.jpg')] bg-cover bg-center bg-no-repeat lg:min-h-[75vh]">
        <div className="flex flex-col items-center lg:flex-row">
          <Image
            src={rolaLogo}
            alt="Rola"
            className="mx-auto mb-12 max-w-[60vw] lg:-mt-12 lg:mb-0 lg:mr-12"
            style={{
              maxWidth: "75%",
              height: "auto",
            }}
          />
          <Container className="text-center lg:text-left">
            <Title className="mb-8 font-normal uppercase">
              Conoce nuevos artistas <br />
              Disfruta de su música y su contenido <br />
              Forma parte de su comunidad
            </Title>
            <Link href="/artists">
              <Button>Ver artistas</Button>
            </Link>
          </Container>
        </div>
      </Container>

      <Container className="bg-background-dark z-10">
        <Container
          size="xl"
          className="flex min-h-[50vh] px-4 py-24 lg:pb-0 xl:min-h-[auto]"
        >
          <div className="-mt-12 lg:max-w-[50%] lg:flex-none">
            <Title order={2} align="left" underline className="mb-8 uppercase">
              ¿Qué es ROLA?
            </Title>
            <Text className="mb-4">
              ROLA es una comunidad y un punto de encuentro para mentes
              musicales inquietas. Te invitamos a descubrir artistas musicales,
              donde la creatividad y la pasión se desbordan en cada nota. Con
              ROLA, podrás disfrutar de contenido exclusivo, desde canciones
              inéditas hasta videos detrás de escena. Es como tener un pase VIP
              al corazón de la escena musical independiente. ¡Prepárate para
              sentir la música en su estado más puro!
            </Text>
            <Text className="mb-4">
              Únete a otros entusiastas como tú y apoya a tus artistas favoritos
              mientras se abren camino en la industria. Con tu apoyo estás
              impulsando sus carreras y ayudándolos a alcanzar nuevas alturas.
              Juntos, estamos creando un movimiento musical independiente único
              y emocionante.
            </Text>
            <Text>
              Así que si estás listo para explorar nuevos sonidos, conectarte
              con músicos apasionados y ser parte de una revolución musical,
              ROLA es tu boleto de entrada. Únete a nosotros y sé parte de la
              evolución musical. ¡Vamos a hacer historia juntos!
            </Text>
          </div>
          <Image
            src={ManWithHeadphones}
            alt="Hombre con auriculares"
            className="-mt-36 ml-24 hidden grow lg:block"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Container>
      </Container>

      <Container className="bg-[url('/static/img/landing-section-3.jpg')] bg-cover bg-center bg-no-repeat py-24">
        <Container size="md" className="px-4">
          <Title order={2} underline className="mb-8 uppercase">
            ¿Cómo funciona?
          </Title>
          <Text className="mb-4 text-center">
            ROLA es una plataforma revolucionaria que pone el poder en tus manos
            para apoyar a tus artistas favoritos. ¿Cómo funciona? Es simple.
            Mediante una suscripción a su contenido exclusivo, te conviertes en
            un apoyo directo para el artista, ayudándoles a financiar sus costos
            y continuar creando música de calidad. ¡Es una experiencia win-win!
            Tú obtienes acceso a material único y emocionante, mientras ellos
            pueden enfocarse en lo que hacen mejor: hacer música. Es una forma
            efectiva y gratificante de contribuir al éxito de tus artistas
            independientes preferidos.
          </Text>
          <Text className="mb-4 text-center">
            Apoyar un artista y formar parte de su comunidad cuesta desde casi
            lo mismo que una sola cerveza... ¿Qué tal si invitas a “esa cerveza”
            a tu artista favorito? ;)
          </Text>
        </Container>
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

      <Container className="">
        <Container
          size="xl"
          className="px-4 py-12 lg:flex lg:justify-between lg:pb-0"
        >
          <Image
            src={RolaOnPhone}
            alt="Rola en móvil"
            className="-mb-[1px] -mt-32 hidden lg:block"
            style={{
              height: "auto",
            }}
          />
          <Container className="lg:max-w-[50%]">
            <Title order={2} underline className="mb-8 uppercase">
              Impacto
            </Title>
            <Text className="text-center lg:text-right">
              El acercar a los seguidores con sus artistas favoritos y crear
              comunidad con ellos, permite no solo fortalecer vínculos, también
              se brinda un soporte a los artistas para que puedan seguir
              trabajando. Creemos fuertemente que mientras menos se preocupen
              los artistas por las actividades que conllevan la
              auto-financiación, mayor será la calidad de su trabajo, puesto que
              pueden dedicar más tiempo y esfuerzo en su música.
            </Text>
            <div className="mt-12">
              <div className="border-brand mx-auto flex flex-wrap justify-between gap-8 border-b-4 pb-4 md:w-1/2 lg:ml-auto">
                <div className="text-center">
                  <Image
                    src={GuitarIcon}
                    alt="Ícono de Guitarra"
                    className="mx-auto"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                  <Text className="text-brand font-medium uppercase">
                    Talento
                  </Text>
                </div>
                <div className="text-center">
                  <Image
                    src={ThumbsUpIcon}
                    alt="Pulgar arriba"
                    className="mx-auto"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                  <Text className="text-brand font-medium uppercase">
                    Calidad
                  </Text>
                </div>
                <div className="text-center">
                  <Image
                    src={RockHandIcon}
                    alt="Mano de Rock"
                    className="mx-auto"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                  <Text className="text-brand font-medium uppercase">
                    Pasión
                  </Text>
                </div>
              </div>
            </div>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}

export { HomePageUI };
