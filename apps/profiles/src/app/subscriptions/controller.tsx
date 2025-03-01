import { currentUser } from "@clerk/nextjs/server";
import { db } from "@rola/services/firebase";
import { stripe } from "@rola/services/stripe";
import { redirect } from "next/navigation";
import { Subscription } from "./data";

async function subscriptionsPageController() {
  const userAuthInfo = await currentUser();

  if (!userAuthInfo) {
    redirect("/not-found");
  }

  const userSubscriptions = await db.users.listUserSubscriptions(
    userAuthInfo.id
  );

  if (!userSubscriptions.success || !userSubscriptions.data.length) {
    redirect("/not-found");
  }

  let subscriptionsInfo: Subscription[] = [];

  for await (const subscription of userSubscriptions.data) {
    const [artist, tier, subscriptionInfo] = await Promise.all([
      db.artists.getArtist(subscription.artist),
      db.artists.getArtistSubscriptionTier(
        subscription.artist,
        subscription.tier
      ),
      stripe.subscriptions.retrieveSubscription(subscription.id),
    ]);

    if (!artist || !tier.data || !subscriptionInfo) {
      continue;
    }

    console.log("subscriptionInfo", subscriptionInfo.data);

    subscriptionsInfo.push({
      id: artist.id,
      name: artist.name,
      profileImg: artist.profileURL,
      active: tier.data.active,
      price: tier.data.prices.monthly.value,
      tier: {
        id: tier.data.id,
        label: tier.data.label,
      },
      canceledAt: subscriptionInfo.data.subscription.canceled_at
        ? new Date(subscriptionInfo.data.subscription.canceled_at * 1000)
        : null,
      createdAt: new Date(subscriptionInfo.data.subscription.created * 1000),

      nextBillingDate: new Date(
        subscriptionInfo.data.subscription.current_period_end * 1000
      ),
      paymentMethod: {
        cardBrand: subscriptionInfo.data.paymentMethod?.cardBrand,
        last4: subscriptionInfo.data.paymentMethod?.last4,
      },
    });
  }

  return {
    subscriptions: subscriptionsInfo,
  };
}

export { subscriptionsPageController };
