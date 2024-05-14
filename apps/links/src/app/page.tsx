import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
        <Link
          className="w-60 text-center bg-white text-black py-2 px-8 rounded-full hover:bg-brand"
          href="https://urlgeni.us/youtube/channel/rola-youtube"
        >
          YouTube
        </Link>
        <Link
          className="w-60 text-center bg-white text-black py-2 px-8 rounded-full hover:bg-brand"
          href="https://urlgeni.us/instagram/rola-instagram"
          target="_blank"
        >
          Instagram
        </Link>
        <Link
          className="w-60 text-center bg-white text-black py-2 px-8 rounded-full hover:bg-brand"
          href="https://urlgeni.us/tiktok/rola-tiktok"
          target="_blank"
        >
          TikTok
        </Link>
        <Link
          className="w-60 text-center bg-white text-black py-2 px-8 rounded-full hover:bg-brand"
          href="https://rolamusic.app"
          target="_blank"
        >
          Web
        </Link>
      </div>
    </main>
  );
}
