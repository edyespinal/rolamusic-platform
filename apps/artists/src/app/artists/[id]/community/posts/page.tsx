import { db } from "@rola/services/firebase";
import { ArtistPostsPageUI } from "./ui";

async function ArtistPostsPage({ params }: { params: { id: string } }) {
  const { id: artistId } = params;

  const community = await db.artists.getArtistCommunity(artistId);

  return (
    <ArtistPostsPageUI artistId={artistId} posts={community?.posts || []} />
  );
}

export default ArtistPostsPage;
