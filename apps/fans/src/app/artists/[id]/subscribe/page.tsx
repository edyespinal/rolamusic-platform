import { currentUser } from "@clerk/nextjs/server";
import { db } from "@rola/services/firebase";
import { stripe } from "@rola/services/stripe";
import { redirect } from "next/navigation";
import { ArtistSubscriptionTier } from "@rola/services/schemas";

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

  if (!user || !artistId || !tier) {
    redirect("/404");
  }

  const userInfo = await db.users.getUser(user.id);
  const paymentDetails = await db.artists.getArtistPaymentDetails(artistId);
  const tiers = await db.artists.getArtistSubscriptionTiers(artistId);

  if (
    !userInfo?.stripeAccountId ||
    !paymentDetails?.stripeAccountId ||
    !tiers
  ) {
    redirect("/404");
  }

  const selectedTier: ArtistSubscriptionTier = tiers.find(
    (t) => t.name === tier
  );

  if (!selectedTier) {
    redirect("/404");
  }

  const checkoutSession = await stripe.checkout.createSession({
    priceId: selectedTier.prices.monthly.priceId,
    stripeAccountId: paymentDetails.stripeAccountId,
    returnUrl: `${process.env.NEXT_PUBLIC_FANS_APP}/artists/${artistId}/subscribe/success?tier=${selectedTier.name}`,
  });

  if (!checkoutSession?.url) {
    redirect("/404");
  }

  redirect(checkoutSession.url);
}

export default SubscriptionPage;
