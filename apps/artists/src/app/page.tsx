import { currentUser } from "@clerk/nextjs/server";
import { HomePageUI } from "./home/ui";
import { services } from "@rola/services/firebase";

async function HomePage() {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  const userArtists = await services.getUserArtists(user.id);

  return <HomePageUI artists={userArtists} />;
}

export default HomePage;
