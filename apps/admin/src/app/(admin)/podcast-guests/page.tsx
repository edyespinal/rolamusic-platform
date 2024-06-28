import { services } from "@rola/services/firebase";
import { Container, Text, Title } from "@rola/ui/components";

async function PodcastGuestsPage() {
  const guests = await services.getGuests();

  return (
    <Container>
      <Title order={3} align="left" className="pb-4">
        Invitados
      </Title>

      <Container>
        {guests.map((guest) => (
          <Container
            key={guest.id}
            className="border-b border-gray-dark p-2 mb-4"
          >
            <Title order={5} align="left">
              {guest.name}
            </Title>
            <Text>{guest.email}</Text>
            <div className="flex gap-4">
              {guest.socials?.map((social) => {
                if (!social.url) {
                  return null;
                }

                return (
                  <a
                    href={social.url}
                    key={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-primary "
                  >
                    {social.name}
                  </a>
                );
              })}
            </div>
          </Container>
        ))}
      </Container>
    </Container>
  );
}

export default PodcastGuestsPage;
