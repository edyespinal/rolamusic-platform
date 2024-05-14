"use client";

import React from "react";
import Image from "next/image";

export default function Home() {
  const redirectTo = (app: "youtube" | "instagram" | "tiktok" | "web") => {
    switch (app) {
      case "youtube":
        document.location = "https://urlgeni.us/youtube/channel/rola-youtube";

        break;
      case "instagram":
        document.location = "https://urlgeni.us/instagram/rola-instagram";

        break;
      case "tiktok":
        document.location = "https://urlgeni.us/tiktok/rola-tiktok";

        break;
      case "web":
        document.location = "https://rolamusic.app";

        break;
      default:
        break;
    }
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
