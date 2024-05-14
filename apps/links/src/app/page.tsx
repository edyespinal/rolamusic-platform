"use client";

import React from "react";
import Image from "next/image";
import { Platforms, links } from "./helpers/links";

export default function Home() {
  const redirectTo = (platform: Platforms) => {
    window.location.href = links[platform];
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="text-center space-y-4 pb-12">
        <Image
          className="m-auto"
          src={"/assets/img/logo-rola-vertical-blanco.svg"}
          width={120}
          height={120}
          alt="Logo"
        />
      </div>

      <div className="flex flex-col gap-4 items-center">
        <button
          className="w-60 text-center bg-white text-black py-2 px-8 rounded-full hover:bg-brand"
          onClick={() => redirectTo("youtube")}
        >
          YouTube
        </button>
        <button
          className="w-60 text-center bg-white text-black py-2 px-8 rounded-full hover:bg-brand"
          onClick={() => redirectTo("instagram")}
        >
          Instagram
        </button>
        <button
          className="w-60 text-center bg-white text-black py-2 px-8 rounded-full hover:bg-brand"
          onClick={() => redirectTo("spotify")}
        >
          Spotify
        </button>
        <button
          className="w-60 text-center bg-white text-black py-2 px-8 rounded-full hover:bg-brand"
          onClick={() => redirectTo("tiktok")}
        >
          TikTok
        </button>
        <button
          className="w-60 text-center bg-white text-black py-2 px-8 rounded-full hover:bg-brand"
          onClick={() => redirectTo("web")}
        >
          Web
        </button>
      </div>
    </main>
  );
}
