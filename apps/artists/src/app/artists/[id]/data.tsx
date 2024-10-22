"use client";

import React from "react";
import { Artist, ArtistCommunity, ArtistMember } from "@rola/services/schemas";
import { useFieldArray, useForm } from "react-hook-form";
import { useToast } from "@rola/ui/components";
import { db } from "@rola/services/firebase";

export type FormValues = Artist & {
  message?: string;
  videoURL?: string;
  songs?: { id: string }[];
};

const useArtistData = (artist: Artist, community: ArtistCommunity) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    defaultValues: {
      email: artist.email,
      name: artist.name,
      genres: artist.genres,
      year: artist.year,
      location: {
        state: artist.location?.state ?? "",
      },
      profileURL: artist.profileURL,
      coverURL: artist.coverURL,
      bio: artist.bio,
      message: community?.message ?? "",
      videoURL: community?.videoURL ?? "",
      songs: community?.songs?.length
        ? community?.songs?.map((song) => ({ id: song }))
        : [{ id: "" }, { id: "" }],
      members: artist.members,
    },
  });

  const {
    fields: members,
    append: addMember,
    remove: removeMember,
  } = useFieldArray<FormValues, "members", "id">({
    control: form.control,
    name: "members",
  });

  const {
    fields: songs,
    append: appendSong,
    remove: removeSong,
  } = useFieldArray<FormValues, "songs", "id">({
    control: form.control,
    name: "songs",
    rules: {
      maxLength: { value: 3, message: "error message" },
    },
  });

  function addSong() {
    if (songs.length >= 3) {
      return;
    }

    appendSong({ id: "" });
  }

  async function handleSubmit(values: FormValues) {
    setIsLoading(true);

    try {
      await db.artists.updateArtist(artist.id, {
        ...artist,
        email: values.email,
        name: values.name,
        genres: values.genres,
        year: values.year,
        location: {
          ...artist.location,
          state: values.location.state,
        },
        profileURL: values.profileURL,
        coverURL: values.coverURL,
        bio: values.bio,
        members: values.members,
      });

      await db.artists.updateArtistCommunity(artist.id, {
        message: values.message ?? "",
        videoURL: values.videoURL ?? "",
        songs: values.songs?.map((song) => song.id) ?? [],
      });

      toast({
        title: "Artista actualizado",
        description: "Artista actualizado correctamente",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "No se pudo actualizar el artista",
        variant: "destructive",
      });
    }

    setIsLoading(false);
  }

  return {
    form,
    members,
    addMember,
    removeMember,
    handleSubmit,
    songs,
    addSong,
    removeSong,
    isLoading,
  };
};

export { useArtistData };
