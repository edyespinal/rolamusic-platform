"use client";

import React from "react";
import { UTUploadButton } from "../../utils/uploadthing";
import { ClientUploadedFileData } from "uploadthing/types";
import { Loader } from "@rola/ui/components";

function UploadButton({
  endpoint,
  userId,
  artistId,
  profileUrl,
  coverUrl,
  maxSize,
  onClientUploadComplete,
  onUploadError,
}: {
  endpoint: "artistProfileImage" | "artistCoverImage";
  userId: string;
  artistId: string;
  profileUrl: string;
  coverUrl: string;
  maxSize?: number;
  onClientUploadComplete: (
    data: ClientUploadedFileData<{ url: string }>[]
  ) => void;
  onUploadError: () => void;
}) {
  return (
    <React.Fragment>
      <UTUploadButton
        endpoint={endpoint}
        input={{
          userId,
          artistId,
          coverUrl,
          profileUrl,
        }}
        className="custom"
        onClientUploadComplete={(response) => onClientUploadComplete(response)}
        onUploadError={onUploadError}
        content={{
          button({ isUploading }) {
            if (isUploading) {
              return <Loader size="xs" />;
            }

            return <span>Subir imagen</span>;
          },
          allowedContent({ isUploading, uploadProgress }) {
            if (isUploading) {
              return <span>`${uploadProgress}%`</span>;
            }

            return <span>Tamaño máximo: {maxSize}</span>;
          },
        }}
      />
    </React.Fragment>
  );
}

export { UploadButton };
