import React from "react";
import { db } from "@rola/services/firebase";
import { ArtistCommunityPageUI } from "./ui";
import { redirect } from "next/navigation";

async function ArtistCommunityPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const artist = await db.artists.getArtist(id);

  if (!artist) {
    redirect("/404");
  }

  return <ArtistCommunityPageUI artist={artist} />;
}

export default ArtistCommunityPage;
