import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { db } from "@rola/services/firebase";
import { SubscriptionSuccessPageUI } from "./ui";

async function SubscriptionSuccessPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { id: artistId } = params;
  const { tier, access, session_id } = searchParams;
  const user = await currentUser();

  if (!user || !session_id || !tier) {
    throw new Error("Algo ha salido mal");
  }

  await db.users.subscribeToArtist(user.id, artistId, tier as string);

  await clerkClient.users.updateUserMetadata(user.id, {
    publicMetadata: {
      supporting: [
        ...(user.publicMetadata.supporting as any[]),
        {
          artist: artistId,
          tier: tier as string,
          access: access as string,
        },
      ],
    },
  });

  return <SubscriptionSuccessPageUI artistId={artistId} />;
}

export default SubscriptionSuccessPage;
