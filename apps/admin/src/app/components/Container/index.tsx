import React from "react";
import { cn } from "@rola/tailwind-config/utils";

type ComponentProps = {
  children: React.ReactNode;
  className?: string;
};

function Container(props: ComponentProps) {
  const { children, className } = props;

  return (
    <div className={cn("mx-auto w-full max-w-5xl", className)}>{children}</div>
  );
}

export { Container };
