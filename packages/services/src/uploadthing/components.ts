import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";
import { StorageFileRouter } from "./core";

const UploadButton = generateUploadButton<StorageFileRouter>();
const UploadDropzone = generateUploadDropzone<StorageFileRouter>();

export { UploadButton, UploadDropzone };
