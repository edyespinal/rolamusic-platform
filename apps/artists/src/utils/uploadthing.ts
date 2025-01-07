import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";
import { type StorageFileRouter } from "../app/api/uploadthing/core";

const UTUploadButton = generateUploadButton<StorageFileRouter>();
const UTUploadDropzone = generateUploadDropzone<StorageFileRouter>();

export { UTUploadButton, UTUploadDropzone };
