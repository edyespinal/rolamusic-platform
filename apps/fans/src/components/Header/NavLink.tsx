"use client";

import { cn } from "@rola/tailwind-config/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const path = usePathname();

  return (
    <React.Fragment>
      <Link
        href={href}
        className={cn(
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
