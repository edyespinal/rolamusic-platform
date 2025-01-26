import { db } from "@rola/services/firebase";
import { NewArtistPostPageUI } from "./ui";

async function NewArtistPostPage({ params }: { params: { id: string } }) {
  const { id: artistId } = params;

  const tiers = await db.artists.getArtistSubscriptionTiers(artistId);

  if (!tiers) {
    throw new Error("Algo ha salido mal");
  }

  const tierOptions = tiers.data.map((tier) => ({
    label: tier.label,
    access: tier.access,
  }));

  tierOptions.unshift({
    label: "Público",
    access: 0,
  });

  const postId = crypto.randomUUID();

  return (
    <NewArtistPostPageUI
      artistId={artistId}
      postId={postId}
      tiers={tierOptions}
    />
  );
}

export default NewArtistPostPage;
