import z from "zod";
import { currentUser } from "@clerk/nextjs/server";
import { createUploadthing, FileRouter } from "uploadthing/next";
import { UTFiles } from "uploadthing/server";
import { UTApi } from "uploadthing/server";
import { db } from "@rola/services/firebase";

const uploader = createUploadthing();

const storageFileRouter = {
  artistProfileImage: uploader({
    "image/jpeg": {
      acl: "public-read",
      maxFileSize: "512KB",
      maxFileCount: 1,
      minFileCount: 1,
    },
    "image/png": {
      acl: "public-read",
      maxFileSize: "512KB",
      maxFileCount: 1,
      minFileCount: 1,
    },
    "image/webp": {
      acl: "public-read",
      maxFileSize: "512KB",
      maxFileCount: 1,
      minFileCount: 1,
    },
  })
    .input(
      z.object({
        userId: z.string(),
        artistId: z.string(),
        profileUrl: z.string(),
      })
    )
    .middleware(async ({ input, files }) => {
      const user = await currentUser();
      if (!user || user.id !== input.userId) {
        throw new Error("User not found");
      }
      const fileOverrides = files.map((file) => {
        const name = `artist-profile-${input.artistId}.${file.type.split("/")[1]}`;
        return {
          ...file,
          name,
        };
      });

      return {
        artistId: input.artistId,
        previousKey: input.profileUrl?.split("/f/")[1] ?? null,
        [UTFiles]: fileOverrides,
      };
    })
    .onUploadError((error) => {
      console.error("onUploadError", error);
    })
    .onUploadComplete(async ({ metadata, file }) => {
      await db.artists.updateArtistProfileImage(metadata.artistId, file.url);
      if (metadata.previousKey) {
        await new UTApi().deleteFiles([metadata.previousKey]);
      }

      return {
        url: file.url,
      };
    }),
  artistCoverImage: uploader({
    "image/jpeg": {
      acl: "public-read",
      maxFileSize: "4MB",
      maxFileCount: 1,
      minFileCount: 1,
    },
    "image/png": {
      acl: "public-read",
      maxFileSize: "4MB",
      maxFileCount: 1,
      minFileCount: 1,
    },
    "image/webp": {
      acl: "public-read",
      maxFileSize: "4MB",
      maxFileCount: 1,
      minFileCount: 1,
    },
  })
    .input(
      z.object({
        userId: z.string(),
        artistId: z.string(),
        coverUrl: z.string(),
      })
    )
    .middleware(async ({ input, files }) => {
      const user = await currentUser();
      if (!user || user.id !== input.userId) {
        throw new Error("Unauthorized");
      }
      const fileOverrides = files.map((file) => {
        const name = `artist-cover-${input.artistId}.${file.type.split("/")[1]}`;
        return {
          ...file,
          name,
        };
      });

      return {
        artistId: input.artistId,
        previousKey: input.coverUrl?.split("/f/")[1] ?? null,
        [UTFiles]: fileOverrides,
      };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      await db.artists.updateArtistCoverImage(metadata.artistId, file.url);
      if (metadata.previousKey) {
        await new UTApi().deleteFiles([metadata.previousKey]);
      }

      return {
        url: file.url,
      };
    }),
} satisfies FileRouter;

type StorageFileRouter = typeof storageFileRouter;

export { storageFileRouter, type StorageFileRouter };
