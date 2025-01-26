"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { User } from "@clerk/nextjs/server";
import { SignedOut } from "@clerk/nextjs";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Container,
  Form,
  FormControl,
  FormField,
  FormItem,
  Input,
  Separator,
  Text,
  Title,
} from "@rola/ui/components";
import { Artist, ArtistPost } from "@rola/services/schemas";
import { ArrowLeftIcon, HeartIcon, MessageCircleIcon } from "@rola/ui/icons";
import { useArtistPageData } from "../../data";
import { useArtistPostPageData } from "./data";

function ArtistPostPageUI({
  artist,
  userProfileImage,
  post,
}: {
  artist: Artist;
  userProfileImage: User["imageUrl"];
  post: ArtistPost & { likedByUser: boolean };
}) {
  const { likes, likedByUser, handleLike } = useArtistPageData({
    artistId: artist.id,
    postId: post.id,
    postLikes: post.likes.length,
    postLikedByUser: post.likedByUser,
  });

  const { form, postComments, handleSubmitComment, isLoading } =
    useArtistPostPageData(post.comments);

  return (
    <Container
      size="lg"
      className="mb-20 mt-4 flex flex-col items-start gap-16 px-4 lg:mt-12 lg:flex-row lg:px-0"
    >
      <div className="relative lg:w-3/4">
        <Link
          href={`/artists/${artist.id}`}
          className="lg:absolute lg:-left-20"
        >
          <Button variant="outline" size="icon" className="mb-4">
            <ArrowLeftIcon />
          </Button>
        </Link>

        {post.type === "IMAGE" && (
          <Container className="bg-background mt-8 w-full">
            <Image
              src={post.url || ""}
              alt={post.title}
              objectFit="contain"
              width={512}
              height={512}
              className="mx-auto mb-12"
            />
          </Container>
        )}

        {post.type === "VIDEO" && (
          <Container size="md" className="mb-12 h-96">
            <iframe
              width="100%"
              height="100%"
              className="size-full rounded-xl"
              src={`https://www.youtube.com/embed/${post.url?.split("v=").pop()?.split("&").shift()}`}
              title={post.caption}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Container>
        )}

        <Title order={2} align="left" underline>
          {post.title}
        </Title>

        <Container className="mt-8">
          <p>{post.caption}</p>
        </Container>

        <Separator className="my-12" />

        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <Button size="icon" variant="ghost" onClick={handleLike}>
              <HeartIcon
                size={24}
                fill={likedByUser ? "red" : "none"}
                stroke={likedByUser ? "red" : "currentColor"}
              />
            </Button>
            <Text>{likes}</Text>
          </div>

          <div className="flex items-center gap-2">
            <MessageCircleIcon size={24} />
            <Text>{postComments.length}</Text>
          </div>
        </div>

        <Separator className="my-12" />

        <Title order={4} align="left" className="mb-4 mt-12">
          Comentarios
        </Title>
        {post.comments.length > 0 ? (
          <div>
            {postComments.map((comment) => (
              <Container key={comment.id}>
                <span className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={comment.user.photoURL} />
                    <AvatarFallback>
                      {comment.user.displayName.slice(0, 1)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-background mt-8 rounded-xl px-4 py-2">
                    <Text className="font-semibold">
                      {comment.user.displayName}
                    </Text>
                    <Text>{comment.content}</Text>
                  </div>
                </span>
              </Container>
            ))}
          </div>
        ) : (
          <Text>Todavía no hay comentarios :(</Text>
        )}

        <SignedOut>
          <span className="flex gap-2">
            <Avatar>
              <AvatarImage src={userProfileImage} />
              <AvatarFallback>R</AvatarFallback>
            </Avatar>
            <Input placeholder="Inicia sesión para comentar..." />
          </span>
        </SignedOut>

        <form
          className="mt-6"
          onSubmit={form.handleSubmit(handleSubmitComment)}
        >
          <Form {...form}>
            <span className="flex gap-2">
              <Avatar>
                <AvatarImage src={userProfileImage} />
                <AvatarFallback>R</AvatarFallback>
              </Avatar>

              <FormField
                name="artistId"
                control={form.control}
                render={() => (
                  <FormControl>
                    <Input type="hidden" value={artist.id} />
                  </FormControl>
                )}
                defaultValue={artist.id}
              />

              <FormField
                name="postId"
                control={form.control}
                render={() => (
                  <FormControl>
                    <Input type="hidden" value={post.id} />
                  </FormControl>
                )}
                defaultValue={post.id}
              />

              <Container className="relative flex items-center">
                <FormField
                  name="comment"
                  control={form.control}
                  render={({ field }) => (
                    <FormControl>
                      <Input
                        placeholder="Escribe tu comentario..."
                        {...field}
                      />
                    </FormControl>
                  )}
                />

                {form.watch("comment") && (
                  <Button
                    size="xs"
                    type="submit"
                    loading={isLoading}
                    className="absolute right-2"
                  >
                    Comentar
                  </Button>
                )}
              </Container>
            </span>
          </Form>
        </form>
      </div>

      <div className="bg-background flex flex-col gap-4 rounded-xl p-6 lg:w-1/4">
        {artist.profileURL && (
          <Image
            src={artist.profileURL}
            alt={artist.name}
            width={512}
            height={512}
          />
        )}

        <Title order={5} align="left">
          {artist.name}
        </Title>
      </div>
    </Container>
  );
}

export { ArtistPostPageUI };
