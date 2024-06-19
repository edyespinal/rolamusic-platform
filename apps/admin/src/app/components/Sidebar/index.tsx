"use client";

import { cn } from "@rola/tailwind-config/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathname = usePathname();
  const selected = "bg-brand text-black font-semibold";

  return (
    <div className="flex flex-col gap-4">
      <Link
        href="/artists"
        className={cn("py-1 px-4", pathname === "/artists" && selected)}
      >
        Artistas
      </Link>
      <Link
        href="/podcast-guests"
        className={cn("py-1 px-4", pathname === "/podcast-guests" && selected)}
      >
        ROLA Talks
      </Link>
    </div>
  );
}

export { Sidebar };
