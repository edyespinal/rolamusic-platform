import { db } from "@rola/services/firebase";
import { Guest } from "@rola/services/schemas";

async function submitGuestRequest(data: Omit<Guest, "id">) {
  await db.podcast.guestRequest(data);
}

export { submitGuestRequest };
