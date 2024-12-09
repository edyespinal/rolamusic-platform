import { db } from "@rola/services/firebase";
import { ArtistSubscriptionPageUI } from "./ui";
import { redirect } from "next/navigation";

async function ArtistSubscriptionPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const artist = await db.artists.getArtist(id);

  if (!artist) {
    return redirect("/404");
  }

  return (
    <ArtistSubscriptionPageUI
      id={id}
      name={artist.name}
      profileURL={artist.profileURL}
      coverURL={artist.coverURL}
    />
  );
}

export default ArtistSubscriptionPage;
