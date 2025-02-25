import { currentUser } from "@clerk/nextjs/server";
import { db } from "@rola/services/firebase";
import { ArtistPagePost } from "./types";
import { ArtistPageUI } from "./ui";
import { ArtistSubscriptionTier } from "@rola/services/schemas";

async function ArtistPage({ params }: { params: { id: string } }) {
  const { id: artistId } = params;

  const [userAuth, artist, tiers, community, posts] = await Promise.all([
    currentUser(),
    db.artists.getArtist(artistId),
    db.artists.getArtistSubscriptionTiers(artistId),
    db.artists.getArtistCommunity(artistId),
    db.artists.getArtistPosts(artistId),
  ]);

  console.log("Artist admin", artist?.admin, "User id", userAuth?.id);

  if (!artist || !community) {
    throw new Error("Algo ha salido mal cargando la información del artista");
  }

  let userTier: ArtistSubscriptionTier | undefined;

  if (userAuth) {
    userTier = tiers.data.find((tier) =>
      tier.subscribers.includes(userAuth.id)
    );
  }

  const pagePosts: ArtistPagePost[] = posts.data.map((post) => {
    const date = post.date as any;
    const postDate = new Date(date.seconds * 1000);
    let access = false;

    switch (true) {
      case artist.admin === userAuth?.id:
        access = true;
        break;
      case post.access === 0:
        access = true;
        break;
      case userTier && userTier?.access >= post.access:
        access = true;
        break;
    }

    return {
      id: post.id,
      type: post.type,
      access,
      tier:
        tiers?.data.find((tier) => tier.access === post.access)?.label || "",
      title: post.title,
      caption: post.caption || "",
      date: `
        ${postDate.getDate()}
        de ${postDate.toLocaleString("es", { month: "long" })}
        de ${postDate.getFullYear()}`,
      likes: post.likes.length || 0,
      likedByUser: !userAuth ? false : post.likes.includes(userAuth.id),
      comments: post.comments.length || 0,
      url: access ? post.url : undefined,
    };
  });

  return (
    <ArtistPageUI
      id={artist.id}
      name={artist.name}
      coverURL={artist.coverURL}
      profileURL={artist.profileURL}
      genres={artist.genres}
      bio={artist.bio}
      community={community}
      subscriptionTiers={tiers.data || []}
      supporting={!!userTier}
      posts={pagePosts}
    />
  );
}

export default ArtistPage;
