import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@rola/services/firebase";
import { ArtistPageUI } from "./ui";

async function ArtistPage(props: { params: { id: string } }) {
  const { id } = props.params;

  let [user, artist, community] = await Promise.all([
    currentUser(),
    db.artists.getArtist(id),
    db.artists.getArtistCommunity(id),
  ]);

  if (!community) {
    community = {
      message: "",
      videoURL: "",
      songs: [],
      posts: [],
      subscriptions: {
        topFans: [],
        total: 0,
        tiers: {
          basic: {
            subscribers: [],
            tier: {
              name: "basic",
              label: "Básico",
              prices: [],
              description: "",
            },
          },
        },
      },
    };
  }

  if (!artist || !user) {
    redirect("/404");
  }

  return (
    <ArtistPageUI userId={user.id} artist={artist} community={community} />
  );
}

export default ArtistPage;
