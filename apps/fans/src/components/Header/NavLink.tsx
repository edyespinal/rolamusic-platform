"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@rola/tailwind-config/utils";

function NavLink({
  href,
  prefetch = false,
  children,
  onClick,
}: {
  href: string;
  prefetch?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const path = usePathname();

  return (
    <React.Fragment>
      <Link
        href={href}
        prefetch={prefetch}
        onClick={onClick}
        className={cn(
          "text-center text-lg font-semibold lg:text-sm",
          "hover:text-brand relative pb-1",
          path === href &&
            'text-brand after:border-brand after:absolute after:bottom-0 after:left-1/2 after:-ml-2 after:h-1 after:w-4 after:border-b-2 after:content-[""] hover:text-white'
        )}
      >
        {children}
      </Link>
    </React.Fragment>
  );
}

export { NavLink };
