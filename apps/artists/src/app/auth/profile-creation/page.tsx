import { currentUser } from "@clerk/nextjs/server";
import { ProfileCreationUI } from "./ui";
import { services } from "@rola/services/firebase";

async function ProfileCreationPage() {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  await services.createUser({
    id: user.id,
    email: user.emailAddresses[0]?.emailAddress || "",
    displayName: user.fullName || "",
    photoURL: user.imageUrl,
    artists: [],
    supporting: [],
    genres: [],
  });

  return <ProfileCreationUI />;
}

export default ProfileCreationPage;
