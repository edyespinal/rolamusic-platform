import { createRouteHandler } from "uploadthing/next";
import { storageFileRouter } from "./core";

export const { GET, POST } = createRouteHandler({
  router: storageFileRouter,
});
