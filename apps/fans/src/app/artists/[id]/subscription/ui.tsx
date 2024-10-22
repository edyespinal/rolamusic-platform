import { ArtistAvatar } from "@components/ArtistAvatar/ArtistAvatar";
import { Container, Title } from "@rola/ui/components";
import Image from "next/image";

function ArtistSubscriptionPageUI({
  name,
  profileURL,
  coverURL,
}: {
  name: string;
  profileURL?: string;
  coverURL?: string;
}) {
  return (
    <Container className="mb-24">
      <Container className="relative -mt-20 min-h-[25vh] lg:min-h-[50vh]">
        <Image
          src={coverURL ?? "/static/img/artists-landing-header.jpg"}
          alt={name}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </Container>

      <Container size="sm" className="text-center">
        <ArtistAvatar
          size="xl"
          name={name}
          image={profileURL}
          className="mx-auto -mt-32 mb-8"
        />
        <Title order={2} underline>
          Suscríbete a {name} y forma parte de su comunidad
        </Title>
      </Container>
    </Container>
  );
}

export { ArtistSubscriptionPageUI };
