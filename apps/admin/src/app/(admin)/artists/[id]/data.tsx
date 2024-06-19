"use client";

import { useForm } from "react-hook-form";

function ArtistPageData() {
  const form = useForm({});

  return {
    form,
  };
}

export { ArtistPageData };
