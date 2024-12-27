import { redirect } from "next/navigation";
import { db } from "@rola/services/firebase";
import { ArtistPageUI } from "./ui";
import { currentUser } from "@clerk/nextjs/server";

async function ArtistPage({ params }: { params: { id: string } }) {
  const { id: artistId } = params;
  const userAuth = await currentUser();

  const [artist, tiers, community] = await Promise.all([
    db.artists.getArtist(artistId),
    db.artists.getArtistSubscriptionTiers(artistId),
    db.artists.getArtistCommunity(artistId),
  ]);

  if (!artist || !community || !tiers) {
    redirect("/404");
  }

  let isSupporting = null;

  if (userAuth) {
    const user = await db.users.getUser(userAuth.id);
    isSupporting = user.supporting.find((s) => s.id === artist.id) as any;
  }

  return (
    <ArtistPageUI
      id={artist.id}
      name={artist.name}
      coverURL={artist.coverURL}
      profileURL={artist.profileURL}
      genres={artist.genres}
      bio={artist.bio}
      community={community}
      subscriptionTiers={tiers}
      supporting={isSupporting}
    />
  );
}

export default ArtistPage;
