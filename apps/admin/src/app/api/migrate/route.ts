import { db } from "@rola/services/firebase";
export async function POST() {
  try {
    const artists = await db.artists.getActiveArtists(50);

    if (!artists) {
      return Response.json({ message: `No artists found` });
    }

    for await (const artist of artists) {
      const [subs, community] = await Promise.all([
        db.artists.getArtistSubscriptionTiers(artist.id),
        db.artists.getArtistCommunity(artist.id),
      ]);

      if (!community?.subscriptions.tiers) {
        continue;
      }

      for await (const tier of community.subscriptions.tiers) {
        for await (const sub of subs.data) {
          if (sub.id === tier.tier.id) {
            await db.artists.updateArtistSubscriptionTier(artist.id, sub.id, {
              subscribers: tier.subscribers,
            });
          }
        }
      }
    }

    return Response.json({ message: `Success` });
  } catch (error: any) {
    return Response.json(
      { error: "Something went wrong", message: error.message },
      { status: 500 }
    );
  }
}
