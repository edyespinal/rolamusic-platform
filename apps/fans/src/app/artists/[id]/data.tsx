"use client";

import React from "react";
import { likePost } from "./actions";

const useArtistPageData = ({
  artistId,
  postId,
  postLikes,
  postLikedByUser,
}: {
  artistId: string;
  postId: string;
  postLikes: number;
  postLikedByUser: boolean;
}) => {
  const [likes, setLikes] = React.useState({
    total: postLikes,
    likedByUser: postLikedByUser,
  });

  function handleLike() {
    likePost({
      artistId,
      postId,
      liked: !likes.likedByUser,
    });

    setLikes((prev) => {
      if (prev.likedByUser) {
        return {
          total: prev.total - 1,
          likedByUser: false,
        };
      }

      return {
        total: prev.total + 1,
        likedByUser: true,
      };
    });
  }

  return {
    likes: likes.total,
    likedByUser: likes.likedByUser,
    handleLike,
  };
};

export { useArtistPageData };
