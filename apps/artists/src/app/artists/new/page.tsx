import { currentUser } from "@clerk/nextjs/server";
import { NewArtistPageUI } from "./ui";

async function NewArtistPage() {
  const user = await currentUser();

  return <NewArtistPageUI userEmail={user?.emailAddresses[0]?.emailAddress} />;
}

export default NewArtistPage;
