import { homePageController } from "./controller";
import { HomePageUI } from "./ui";

async function HomePage() {
  const { artists } = await homePageController();

  return <HomePageUI artists={artists} />;
}

export default HomePage;
