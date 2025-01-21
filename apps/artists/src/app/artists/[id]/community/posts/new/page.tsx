import { db } from "@rola/services/firebase";
import { NewArtistPostPageUI } from "./ui";

async function NewArtistPostPage({ params }: { params: { id: string } }) {
  const { id: artistId } = params;

  const tiers = await db.artists.getArtistSubscriptionTiers(artistId);

  if (!tiers) {
    throw new Error("Algo ha salido mal");
  }

  const tierOptions = tiers.map((tier) => ({
    label: tier.label,
    access: tier.access,
  }));

  const postId = crypto.randomUUID();

  return (
    <NewArtistPostPageUI
      artistId={artistId}
      postId={postId}
      tiers={[
        {
          label: "Público",
          access: 0,
        },
        ...tierOptions,
      ]}
    />
  );
}

export default NewArtistPostPage;
