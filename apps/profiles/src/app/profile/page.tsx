import { profilePageController } from "./controller";
import { ProfilePageUI } from "./ui";

async function ProfilePage() {
  const data = await profilePageController();

  return <ProfilePageUI {...data} />;
}

export default ProfilePage;
