"use server";

import { services } from "@rola/services/firebase";

async function actionFiles(id: string, file: File): Promise<any> {
  const res = await services.updateArtistProfileImage(id, file);

  return res;
}

export { actionFiles };
