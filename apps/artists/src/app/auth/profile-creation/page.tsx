import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { db } from "@rola/services/firebase";
import { stripe } from "@rola/services/stripe";
import { ProfileCreationUI } from "./ui";

async function ProfileCreationPage() {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  const [searchResult] = await Promise.all([
    stripe.customers.searchCustomers(
      "email",
      user.emailAddresses[0]?.emailAddress || ""
    ),
    clerkClient().users.updateUserMetadata(user.id, {
      publicMetadata: {
        role: "artist",
      },
    }),
  ]);

  let customer = searchResult?.data[0];

  if (!customer) {
    customer = await stripe.customers.createCustomer(
      user.fullName || "",
      user.emailAddresses[0]?.emailAddress || ""
    );
  }

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
