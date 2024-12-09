import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@rola/services/firebase";
import { ArtistPageUI } from "./ui";

async function ArtistPage(props: { params: { id: string } }) {
  const { id } = props.params;
  const user = await currentUser();
  const artist = await db.artists.getArtist(id);
  let community = await db.artists.getArtistCommunity(id);

  if (!community) {
    community = {
      message: "",
      videoURL: "",
      songs: [],
      subscriptions: {
        topFans: [],
        total: 0,
        types: [],
      },
    };
  }

  if (!artist || !user) {
    redirect("/404");
  }

  return (
    <ArtistPageUI artist={artist} community={community} userId={user.id} />
  );
}

export default ArtistPage;
