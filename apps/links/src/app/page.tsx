"use client";

import React from "react";
import { Platforms, links } from "@helpers/links";
import { Button, Logo } from "@rola/ui/components";

export default function Home() {
  const redirectTo = (platform: Platforms) => {
    window.open(links[platform], "_blank");
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="text-center space-y-4 pb-12">
        <Logo variant="vertical" />
      </div>

      <div className="space-y-4 items-center w-60">
        <Button full onClick={() => redirectTo("youtube")}>
          YouTube
        </Button>
        <Button full onClick={() => redirectTo("instagram")}>
          Instagram
        </Button>
        <Button full onClick={() => redirectTo("spotify")}>
          Spotify
        </Button>
        <Button full onClick={() => redirectTo("tiktok")}>
          TikTok
        </Button>
        <Button full onClick={() => redirectTo("web")}>
          Web
        </Button>
      </div>
    </main>
  );
}
