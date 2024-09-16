import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "../app";

export const storage = getStorage(app);

export async function uploadFile(
  path: string,
  file: Blob | File,
  metadata?: Record<string, any>
): Promise<string> {
  const fileRef = ref(storage, path);
  const result = await uploadBytes(fileRef, file, metadata);
  const url = await getDownloadURL(result.ref);

  return url;
}
