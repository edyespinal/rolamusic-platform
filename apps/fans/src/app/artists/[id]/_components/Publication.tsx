"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Container, Text } from "@rola/ui/components";
import { EyeOffIcon } from "@rola/ui/icons";
import { POST_TYPES } from "@rola/services/constants";
import { HeartIcon, MessageCircleIcon } from "@rola/ui/icons";
import { ArtistPagePost } from "../types";
import { useArtistPageData } from "../data";
import { SignedIn, SignedOut } from "@clerk/nextjs";

function PrivatePublication({ tier }: { tier: string }) {
  return (
    <Container className="flex h-full w-full flex-col justify-center bg-neutral-800 py-16 text-center">
      <EyeOffIcon
        size={60}
        className="text-brand mx-auto mb-2 rounded-full bg-black p-4"
      />
      <Text>
        Contenido exclusivo para miembros de la comunidad <br />
        <span className="text-brand font-semibold">{tier}</span>
      </Text>
    </Container>
  );
}

function PublicationOverlay() {
  return (
    <Text className="text-brand absolute inset-0 z-10 hidden items-center justify-center bg-transparent font-semibold group-hover:flex group-hover:bg-[rgba(0,0,0,0.65)]">
      Ver publicación
    </Text>
  );
}

function Publication({
  artistId,
  post,
}: {
  artistId: string;
  post: ArtistPagePost;
}) {
  const { likes, likedByUser, handleLike } = useArtistPageData({
    artistId,
    postId: post.id,
    postLikes: post.likes,
    postLikedByUser: post.likedByUser,
  });

  return (
    <Container className="bg-background flex w-full flex-col overflow-hidden rounded-xl">
      {post.type === POST_TYPES.TEXT && (
        <Container className="group relative grow bg-neutral-800 px-6">
          {post.access ? (
            <Link href={`/artists/${artistId}/posts/${post.id}`}>
              <Container className="py-8">
                <PublicationOverlay />
                <Text className="line-clamp-6">{post.caption}</Text>
              </Container>
            </Link>
          ) : (
            <PrivatePublication tier={post.tier} />
          )}
        </Container>
      )}

      {post.type === POST_TYPES.IMAGE && (
        <Container className="group relative h-96 grow bg-neutral-800 px-6">
          {post.url ? (
            <Link href={`/artists/${artistId}/posts/${post.id}`}>
              <PublicationOverlay />
              <Image
                src={post.url || ""}
                alt={post.caption}
                objectFit="cover"
                fill
                className="peer hover:opacity-60"
              />
            </Link>
          ) : (
            <PrivatePublication tier={post.tier} />
          )}
        </Container>
      )}

      {post.type === POST_TYPES.VIDEO && (
        <Container className="h-96 grow bg-neutral-800">
          {post.url ? (
            <Link href={`/artists/${artistId}/posts/${post.id}`}>
              <iframe
                width="100%"
                height="100%"
                className="size-full"
                src={`https://www.youtube.com/embed/${post.url?.split("v=").pop()?.split("&").shift()}`}
                title={post.caption}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Link>
          ) : (
            <PrivatePublication tier={post.tier} />
          )}
        </Container>
      )}

      <Container className="flex max-h-32 flex-row items-start px-6 py-4">
        <div className="grow">
          <Text className="line-clamp-1">{post.title}</Text>
          {post.access && (
            <Link href={`/artists/${artistId}/posts/${post.id}`}>
              <Text className="text-brand text-sm font-semibold">
                Ver publicación
              </Text>
            </Link>
          )}
          <Text className="text-brand mt-8 text-sm">
            {post.date.toString()}
          </Text>
        </div>
        <div className="flex-0 flex gap-4">
          <span className="flex items-center gap-2">
            <SignedIn>
              <Button size="icon" variant="ghost" onClick={handleLike}>
                <HeartIcon
                  fill={likedByUser ? "red" : "none"}
                  stroke={likedByUser ? "red" : "white"}
                  size={24}
                />
              </Button>
            </SignedIn>
            <SignedOut>
              <HeartIcon size={24} />
            </SignedOut>
            <Text>{likes}</Text>
          </span>

          <span className="flex items-center gap-2">
            <MessageCircleIcon size={24} />
            <Text>{post.comments}</Text>
          </span>
        </div>
      </Container>
    </Container>
  );
}

export { Publication };
