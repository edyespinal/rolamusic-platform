import React from "react";
import { cn } from "@rola/tailwind-config/utils";
import { FormField } from "../Form/Form";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "ring-offset-brand border-gray-dark flex h-10 w-full border-2 bg-black/50 px-3 py-2 text-sm",
          "focus-visible:ring-brand-dark focus-visible:border-brand-dark focus-visible:outline-none focus-visible:ring-1",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "placeholder:text-muted-foreground",
          type === "date" && "block dark:[color-scheme:dark]",
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
