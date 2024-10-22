"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";

const useHomePageData: any = () => {
  const { user, isLoaded } = useUser();

  return {
    user,
    isLoading: isLoaded,
  };
};

export { useHomePageData };
