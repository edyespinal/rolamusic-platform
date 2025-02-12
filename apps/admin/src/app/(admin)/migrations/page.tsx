import { migrationsPageController } from "./controller";
import { MigrationsPageUI } from "./ui";

async function MigrationsPage() {
  const artists = await migrationsPageController();

  return <MigrationsPageUI artists={artists} />;
}

export default MigrationsPage;
