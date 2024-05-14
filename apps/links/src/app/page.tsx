"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useDevice } from "./hooks/useDevice";

export default function Home() {
  const device = useDevice();

  const links = {
    instagram:
      device === "desktop"
        ? "https://www.instagram.com/rolamusic.app/"
        : "instagram://user?username=rolamusic.app",
    youtube:
      device === "desktop"
        ? "https://www.youtube.com/@rolamusicapp"
        : "vnd.youtube://user/rolamusicapp",
    tiktok:
      device === "desktop"
        ? "https://www.tiktok.com/@rolamusicapp"
        : "tiktok://user?username=rolamusicapp",
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="text-center space-y-4 pb-12">
        <Image
          src={"/assets/img/icon.svg"}
          width={120}
          height={120}
          alt="Logo"
        />
      </div>
      <div className="flex flex-col gap-4 items-center">
        <Link
          className="w-60 text-center bg-white text-black py-2 px-8 rounded-full hover:bg-brand"
          href={links.instagram}
          target="_blank"
        >
          YouTube
        </Link>
        <Link
          className="w-60 text-center bg-white text-black py-2 px-8 rounded-full hover:bg-brand"
          href={links.youtube}
          target="_blank"
        >
          Instagram
        </Link>
        <Link
          className="w-60 text-center bg-white text-black py-2 px-8 rounded-full hover:bg-brand"
          href={links.tiktok}
          target="_blank"
        >
          TikTok
        </Link>
        <Link
          className="w-60 text-center bg-white text-black py-2 px-8 rounded-full hover:bg-brand"
          href="https://rolamusic.app/"
          target="_blank"
        >
          ROLA
        </Link>
      </div>
    </main>
  );
}
