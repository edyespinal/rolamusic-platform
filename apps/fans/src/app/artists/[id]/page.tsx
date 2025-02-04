import { currentUser } from "@clerk/nextjs/server";
import { db } from "@rola/services/firebase";
import { ArtistPagePost } from "./types";
import { ArtistPageUI } from "./ui";

async function ArtistPage({ params }: { params: { id: string } }) {
  const { id: artistId } = params;
  const userAuth = await currentUser();

  const [artist, tiers, community, posts] = await Promise.all([
    db.artists.getArtist(artistId),
    db.artists.getArtistSubscriptionTiers(artistId),
    db.artists.getArtistCommunity(artistId),
    db.artists.getArtistPosts(artistId),
  ]);

  if (!artist || !community) {
    throw new Error("Algo ha salido mal cargando la información del artista");
  }

  let isSupporting = undefined;

  if (userAuth) {
    const user = await db.users.getUser(userAuth.id);
    const supported = user.supporting.find((s) => s.id === artist.id);

    isSupporting = supported?.active ? supported : undefined;
  }

  const userAccess =
    tiers?.data.find((tier) => {
      return isSupporting?.tier === tier.id;
    })?.access || 0;

  const pagePosts: ArtistPagePost[] = posts.data.map((post) => {
    const date = post.date as any;
    const postDate = new Date(date.seconds * 1000);
    const access = post.access <= userAccess;

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
      supporting={isSupporting}
      posts={pagePosts}
    />
  );
}

export default ArtistPage;
