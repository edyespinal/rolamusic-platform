"use client";

import { Artist } from "@rola/services/schemas";
import { Genre, genresList, genresListOptions } from "@rola/services/utils";
import React from "react";

const useArtistsPageData = (artists: Artist[]) => {
  const [displayedArtists, setDisplayedArtists] = React.useState(artists);
  const [selectedSorting, setSelectedSorting] = React.useState(" - ");
  const [selectedFilter, setSelectedFilter] = React.useState("all");

  const sortingOptions = [
    {
      value: "a-z",
      label: "A-Z",
    },
    {
      value: "z-a",
      label: "Z-A",
    },
  ];

  const filterOptions = [
    { value: "all", label: "Todos" },
    ...genresListOptions,
  ];

  function handleSortingChange(value: string) {
    if (value === "a-z") {
      displayedArtists.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (value === "z-a") {
      displayedArtists.sort((a, b) => b.name.localeCompare(a.name));
    }

    setSelectedSorting(value);
  }

  function handleFilterChange(value: Genre | "all") {
    setSelectedFilter(value);

    if (value === "all") {
      setDisplayedArtists(artists);

      return;
    }

    setDisplayedArtists(
      artists.filter((artist) => artist.genres.includes(value))
    );
  }

  return {
    displayedArtists,
    selectedSorting,
    sortingOptions,
    selectedFilter,
    filterOptions,
    handleSortingChange,
    handleFilterChange,
  };
};

export { useArtistsPageData };
