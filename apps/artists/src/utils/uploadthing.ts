import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";
import { type StorageFileRouter } from "../app/api/uploadthing/core";

const UploadButton = generateUploadButton<StorageFileRouter>();
const UploadDropzone = generateUploadDropzone<StorageFileRouter>();

export { UploadButton, UploadDropzone };
