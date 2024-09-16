import { db } from "@rola/services/firebase";
import { Guest } from "@rola/services/schemas";
import { Container, Text, Title } from "@rola/ui/components";

async function PodcastGuestsPage() {
  const guests = await db.podcast.getGuests();

  return (
    <Container>
      <Title order={3} underline align="left" className="pb-4">
        Invitados
      </Title>

      <Container>
        {guests.map((guest: Guest) => (
          <Container
            key={guest.id}
            className="border-gray-dark mb-4 border-b p-2"
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
                    className="hover:text-primary text-neutral-400"
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
