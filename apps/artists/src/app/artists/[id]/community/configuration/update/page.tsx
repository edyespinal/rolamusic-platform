import { db } from "@rola/services/firebase";
import { UpdateSubscriptionTiersPageUI } from "./ui";

async function UpdateSubscriptionTiersPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  await db.artists.updateArtistSubscriptionTiers(params.id);

  return <UpdateSubscriptionTiersPageUI artistId={params.id} />;
}

export default UpdateSubscriptionTiersPage;
