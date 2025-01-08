import { redirect } from "next/navigation";
import { db } from "@rola/services/firebase";
import { currentUser } from "@clerk/nextjs/server";
import { SubscriptionSuccessPageUI } from "./ui";

async function SubscriptionSuccessPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { id: artistId } = params;
  const { tier, session_id } = searchParams;
  const user = await currentUser();

  if (!user || !session_id || !tier) {
    throw new Error("Algo ha salido mal");
  }

  await db.users.subscribeToArtist(user.id, artistId, tier as string);

  return <SubscriptionSuccessPageUI artistId={artistId} />;
}

export default SubscriptionSuccessPage;
