import { currentUser } from "@clerk/nextjs/server";
import { HomePageUI } from "./home/ui";
import { db } from "@rola/services/firebase";

async function HomePage() {
  const user = await currentUser();

  if (!user) {
    throw new Error("No se ha encontrado tu usuario");
  }

  const userArtists = await db.users.getUserManagedArtists(user.id);

  return <HomePageUI artists={userArtists} />;
}

export default HomePage;
