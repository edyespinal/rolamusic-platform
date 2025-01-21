"use client";

import React from "react";
import { ClientUploadedFileData } from "uploadthing/types";
import { Loader } from "@rola/ui/components";
import { FileSize } from "@rola/services/utils";
import { UTUploadButton } from "../../utils/uploadthing";
import { StorageFileRouterKeys } from "../../app/api/uploadthing/core";

function UploadButton({
  endpoint,
  input,
  buttonText,
  maxSize,
  onBeforeUploadBegin,
  onClientUploadComplete,
  onUploadError,
}: {
  endpoint: StorageFileRouterKeys;
  input?: any;
  buttonText?: string;
  maxSize?: FileSize;
  onBeforeUploadBegin: (files: File[]) => Promise<File[]> | File[];
  onClientUploadComplete: (
    data: ClientUploadedFileData<{ url: string }>[]
  ) => void;
  onUploadError: (error: any) => void;
}) {
  return (
    <React.Fragment>
      <UTUploadButton
        endpoint={endpoint}
        className="custom"
        input={{ ...input }}
        onBeforeUploadBegin={(files) => onBeforeUploadBegin(files)}
        onClientUploadComplete={(response) => onClientUploadComplete(response)}
        onUploadError={onUploadError}
        content={{
          button({ isUploading }) {
            if (isUploading) {
              return <Loader size="xs" />;
            }

            return (
              <span className="border-brand text-brand rounded-full border-2 px-6 py-1">
                {buttonText ?? "Subir archivo"}
              </span>
            );
          },
          allowedContent({ isUploading, uploadProgress }) {
            if (isUploading) {
              return <span>{uploadProgress}%</span>;
            }

            return <span>Tamaño máximo: {maxSize}</span>;
          },
        }}
      />
    </React.Fragment>
  );
}

export { UploadButton };
