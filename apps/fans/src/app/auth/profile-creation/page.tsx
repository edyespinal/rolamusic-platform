import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { ProfileCreationUI } from "./ui";
import { db } from "@rola/services/firebase";
import { stripe } from "@rola/services/stripe";

async function ProfileCreationPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const user = await currentUser();
  const redirectUrl = (searchParams?.redirect_url as string) || "/";

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
        role: "fan",
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

  return <ProfileCreationUI redirectUrl={redirectUrl} />;
}

export default ProfileCreationPage;
