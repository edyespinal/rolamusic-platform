import React from "react";
import { ArtistPostPageUI } from "./ui";
import { db } from "@rola/services/firebase";
import { ArtistPagePost } from "../../types";
import { currentUser } from "@clerk/nextjs/server";

async function ArtistPostPage({
  params,
}: {
  params: { id: string; postId: string };
}) {
  const { id: artistId, postId } = params;
  const user = await currentUser();

  if (!params.postId || !artistId) {
    throw new Error("No hemos encontrado el post");
  }

  const [artist, post] = await Promise.all([
    db.artists.getArtist(artistId),
    db.artists.getArtistPost(artistId, postId),
  ]);

  if (!artist || !post?.data) {
    throw new Error("No hemos encontrado el post");
  }

  let userAccess = 0;

  if (user) {
    const supportedArtists = user.publicMetadata.supporting as any[];

    userAccess = supportedArtists.find(
      (item) => item.artist === artistId
    ).access;
  }

  if (post.data.access > userAccess) {
    throw new Error("No tienes acceso a este post");
  }

  return (
    <ArtistPostPageUI
      artist={artist}
      userProfileImage={user?.imageUrl ?? ""}
      post={{
        ...post.data,
        likedByUser: !user ? false : post.data.likes.includes(user.id),
      }}
    />
  );
}

export default ArtistPostPage;
