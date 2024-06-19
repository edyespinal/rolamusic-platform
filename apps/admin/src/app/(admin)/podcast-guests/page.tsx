import { services } from "@rola/services/firebase";
import { Container } from "../../components/Container";

async function PodcastGuestsPage() {
  const guests = await services.getGuests();

  return (
    <Container>
      <h1 className="text-2xl font-semibold">Invitados</h1>

      <div>
        {guests.map((guest) => (
          <div key={guest.id} className="border-b border-gray-dark p-2">
            <h3 className="font-semibold">{guest.name}</h3>
            <p>{guest.email}</p>
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
          </div>
        ))}
      </div>
    </Container>
  );
}

export default PodcastGuestsPage;
