import React from "react";
import { ArtistPostPageUI } from "./ui";
import { db } from "@rola/services/firebase";
import { currentUser } from "@clerk/nextjs/server";
import { NoAccessToPost } from "./_components/NoAccessToPost";

async function ArtistPostPage({
  params,
}: {
  params: { id: string; postId: string };
}) {
  const { id: artistId, postId } = params;

  const [user, artist, { data: post }, tiers] = await Promise.all([
    currentUser(),
    db.artists.getArtist(artistId),
    db.artists.getArtistPost(artistId, postId),
    db.artists.getArtistSubscriptionTiers(artistId),
  ]);

  if (!artist || !post) {
    throw new Error("No hemos encontrado el post");
  }

  let userAccess = 0;

  if (user) {
    const userTier = tiers.data.find((tier) =>
      tier.subscribers.includes(user.id)
    );

    userAccess = userTier?.access || 0;
  }

  if (post.access > userAccess && artist.admin !== user?.id) {
    return <NoAccessToPost artistId={artist.id} />;
  }

  return (
    <ArtistPostPageUI
      artist={artist}
      userProfileImage={user?.imageUrl ?? ""}
      post={{
        ...post,
        likedByUser: !user ? false : post.likes.includes(user.id),
      }}
    />
  );
}

export default ArtistPostPage;
