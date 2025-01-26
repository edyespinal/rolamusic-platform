import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@rola/services/firebase";
import { stripe } from "@rola/services/stripe";

async function SubscriptionPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
}) {
  const user = await currentUser();
  const { id: artistId } = params;
  const { tier } = searchParams;

  if (!user) {
    redirect(
      `/auth/sign-in?redirect_url=${process.env.NEXT_PUBLIC_FANS_APP}/artists/${artistId}`
    );
  }

  if (!artistId || !tier) {
    redirect("/404");
  }

  const userInfo = await db.users.getUser(user.id);
  const paymentDetails = await db.artists.getArtistPaymentDetails(artistId);
  const tiers = await db.artists.getArtistSubscriptionTiers(artistId);

  if (
    !userInfo?.stripeAccountId ||
    !paymentDetails?.stripeAccountId ||
    !tiers.data
  ) {
    redirect("/404");
  }

  const selectedTier = tiers.data.find((t) => t.id === tier);

  if (!selectedTier) {
    redirect("/404");
  }

  const checkoutSession = await stripe.checkout.createSession({
    priceId: selectedTier.prices.monthly.priceId,
    customerId: userInfo.stripeAccountId,
    stripeAccountId: paymentDetails.stripeAccountId,
    returnUrl: `${process.env.NEXT_PUBLIC_FANS_APP}/artists/${artistId}/subscribe/success?tier=${selectedTier.id}&access=${selectedTier.access}`,
    cancelUrl: `${process.env.NEXT_PUBLIC_FANS_APP}/artists/${artistId}`,
  });

  if (!checkoutSession?.url) {
    redirect("/404");
  }

  redirect(checkoutSession.url);
}

export default SubscriptionPage;
