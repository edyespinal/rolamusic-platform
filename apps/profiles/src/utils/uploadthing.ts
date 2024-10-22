import {
  generateUploadButton,
  generateUploadDropzone,
  generateReactHelpers,
} from "@uploadthing/react";

import type { UTFileRouter } from "../../../artists/src/app/api/uploadthing/core";

type UploadButton = ReturnType<typeof generateUploadButton>;
type UploadDropzone = ReturnType<typeof generateUploadDropzone>;
type Helpers = ReturnType<typeof generateReactHelpers>;

const helpers: Helpers = generateReactHelpers<UTFileRouter>();
const useUploadThing: Helpers["useUploadThing"] = helpers.useUploadThing;
const uploadFiles: Helpers["uploadFiles"] = helpers.uploadFiles;

const UploadButton: UploadButton = generateUploadButton<UTFileRouter>();
const UploadDropzone: UploadDropzone = generateUploadDropzone<UTFileRouter>();

export { useUploadThing, uploadFiles, UploadButton, UploadDropzone };
