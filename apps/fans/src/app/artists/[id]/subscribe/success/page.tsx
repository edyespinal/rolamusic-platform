import { redirect } from "next/navigation";
import { db } from "@rola/services/firebase";
import { currentUser } from "@clerk/nextjs/server";
import { OrderPlacedPageUI } from "./ui";

async function OrderPlacedPage({
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
    return redirect("/404");
  }

  try {
    await db.users.subscribeToArtist(user.id, artistId, tier as string);

    return <OrderPlacedPageUI />;
    // redirect(`/artists/${artistId}`);
  } catch (error) {
    console.log(error);

    redirect("/404");
  }
}

export default OrderPlacedPage;
