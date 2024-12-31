import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { ProfileCreationUI } from "./ui";
import { db } from "@rola/services/firebase";
import { stripe } from "@rola/services/stripe";

async function ProfileCreationPage() {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  const [customer] = await Promise.all([
    stripe.customers.createCustomer(user.emailAddresses[0]?.emailAddress || ""),
    clerkClient().users.updateUserMetadata(user.id, {
      publicMetadata: {
        role: "fan",
      },
    }),
  ]);

  await db.users.createUser({
    id: user.id,
    email: user.emailAddresses[0]?.emailAddress || "",
    displayName: user.fullName || "",
    photoURL: user.imageUrl,
    artists: [],
    supporting: [],
    genres: [],
    stripeAccountId: customer.id,
  });

  return <ProfileCreationUI />;
}

export default ProfileCreationPage;
