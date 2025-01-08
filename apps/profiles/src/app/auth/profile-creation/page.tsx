import { currentUser } from "@clerk/nextjs/server";
import { ProfileCreationUI } from "./ui";
import { db } from "@rola/services/firebase";

async function ProfileCreationPage() {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  await db.users.createUser({
    id: user.id,
    email: user.emailAddresses[0]?.emailAddress || "",
    displayName: user.fullName || "",
    photoURL: user.imageUrl,
    artists: [],
    supporting: [],
    genres: [],
    stripeAccountId: "",
  });

  return <ProfileCreationUI />;
}

export default ProfileCreationPage;
