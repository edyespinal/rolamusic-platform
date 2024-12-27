"use client";

import React from "react";
import { Container, Text, Title } from "@rola/ui/components";
import { PodcastEpisode } from "@rola/services/schemas";

function EpisodesPageUI({
  episodesInfo,
}: {
  episodesInfo: {
    episodes: PodcastEpisode[];
    totalEpisodes: number;
  };
}) {
  return (
    <Container>
      <Title order={3} underline align="left" className="pb-4">
        Total de Episodios ({episodesInfo.totalEpisodes})
      </Title>

      <Container className="flex flex-col gap-4">
        {episodesInfo.episodes.length === 0 ? (
          <Text>No hay episodios</Text>
        ) : (
          episodesInfo.episodes.map((episode) => (
            <Container
              key={episode.id}
              className="grid grid-cols-2 gap-2 border-b pb-4"
            >
              <Text className="text-brand col-span-1 px-4 font-semibold uppercase">
                Episodio {episode.number}
              </Text>
              <Text className="col-span-2">
                {episode.guest} · {episode.title} <br />
                Fecha: {new Date(episode.publishedAt).toLocaleDateString()}
              </Text>
            </Container>
          ))
        )}
      </Container>
    </Container>
  );
}

export { EpisodesPageUI };
