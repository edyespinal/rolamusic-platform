"use client";

import React from "react";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

function PHProvider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      loaded(posthog_instance) {
        if (process.env.NODE_ENV === "development") {
          posthog_instance.debug();
        }
      },
    });
  });

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}

export { PHProvider };
