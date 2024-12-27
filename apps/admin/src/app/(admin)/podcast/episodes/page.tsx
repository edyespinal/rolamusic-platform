import React from "react";
import { db } from "@rola/services/firebase";
import { EpisodesPageUI } from "./ui";

async function EpisodesPage() {
  const episodesInfo = await db.podcast.getEpisodes({
    pageSize: 10,
  });

  return <EpisodesPageUI episodesInfo={episodesInfo} />;
}

export default EpisodesPage;
