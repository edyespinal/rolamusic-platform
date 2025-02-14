import { db } from "@rola/services/firebase";
export async function POST(request: Request) {
  const authHeader = request.headers.get("Authorization");

  if (!authHeader || authHeader !== process.env.NEXT_PUBLIC_ADMIN_KEY) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const artists = await db.artists.getActiveArtists(100);

  for await (const artist of artists) {
    const [community, tiers, posts] = await Promise.all([
      db.artists.getArtistCommunity(artist.id),
      db.artists.getArtistSubscriptionTiers(artist.id),
      db.artists.getArtistPosts(artist.id),
    ]);

    if (!community || !tiers) {
      return Response.json({ error: "Community not found" }, { status: 404 });
    }

    const totalPosts = posts.data.length;
    const totalSubscribers = tiers.data.reduce(
      (acc, tier) => acc + tier.subscribers.length,
      0
    );

    await db.artists.updateArtistCommunity(
      artist.id,
      {
        topFans: [],
        totalPosts,
        totalSubscribers,
      },
      false
    );
  }

  return Response.json({ message: `Success` });
}
