import { db } from "@rola/services/firebase";
import { ArtistPostsPageUI } from "./ui";

async function ArtistPostsPage({ params }: { params: { id: string } }) {
  const { id: artistId } = params;

  const [posts, subs] = await Promise.all([
    db.artists.getArtistPosts(artistId),
    db.artists.getArtistSubscriptionTiers(artistId),
  ]);

  if (!posts.success || !subs.success) {
    throw new Error("Algo ha salido mal cargando los posts");
  }

  const pagePosts = posts.data.map((post) => {
    return {
      ...post,
      tier:
        post.access === 0
          ? "Público"
          : subs.data.find((tier) => tier.access === post.access)?.label || "",
    };
  });

  return <ArtistPostsPageUI artistId={artistId} posts={pagePosts} />;
}

export default ArtistPostsPage;
