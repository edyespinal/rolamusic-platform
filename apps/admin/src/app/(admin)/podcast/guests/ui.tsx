import { Guest } from "@rola/services/schemas";
import { Container, Text, Title } from "@rola/ui/components";
import React from "react";

function PodcastGuestsPageUI({ guests }: { guests: Guest[] }) {
  return (
    <Container>
      <Title order={3} underline align="left" className="pb-4">
        Invitados
      </Title>

      <Container>
        {guests.length === 0 ? (
          <Text>No hay invitados</Text>
        ) : (
          guests.map((guest) => (
            <Container
              key={guest.id}
              className="border-background mb-4 border-b p-2"
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
          ))
        )}
      </Container>
    </Container>
  );
}

export { PodcastGuestsPageUI };
