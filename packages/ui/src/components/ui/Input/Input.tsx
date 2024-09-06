import React from "react";
import { cn } from "@rola/tailwind-config/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "flex h-10 w-full border border-gray-dark rounded bg-background-dark px-3 py-2 text-sm ring-offset-brand",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-dark",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "placeholder:text-muted-foreground",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export type { InputProps };
export { Input };
