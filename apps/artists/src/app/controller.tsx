import { currentUser } from "@clerk/nextjs/server";
import { db } from "@rola/services/firebase";

async function homePageController() {
  const user = await currentUser();

  if (!user) {
    throw new Error("No se ha encontrado tu usuario");
  }

  const artists = await db.users.getUserManagedArtists(user.id);

  return {
    artists,
  };
}

export { homePageController };
