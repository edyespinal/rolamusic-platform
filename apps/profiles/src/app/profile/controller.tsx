import { currentUser } from "@clerk/nextjs/server";
import { db } from "@rola/services/firebase";
import { redirect } from "next/navigation";

async function profilePageController() {
  const userAuthInfo = await currentUser();

  if (!userAuthInfo) {
    redirect("/not-found");
  }

  const user = await db.users.getUser(userAuthInfo.id);

  return {
    firstName: userAuthInfo.firstName || "",
    lastName: userAuthInfo.lastName || "",
    fullName: userAuthInfo.fullName || "",
    email: userAuthInfo.primaryEmailAddress?.emailAddress || "",
    imageUrl: userAuthInfo.imageUrl || "",
    role: getUserRole(userAuthInfo.publicMetadata.role as string),
    genres: user.genres || [],
  };
}

function getUserRole(role: string) {
  switch (role) {
    case "artist":
      return "Artista";
    case "admin":
      return "Admin";
    default:
      return "Fan";
  }
}

export { profilePageController };
