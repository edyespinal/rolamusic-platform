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
          "border-gray-dark bg-background-dark ring-offset-brand flex h-10 w-full rounded border px-3 py-2 text-sm",
          "focus-visible:ring-brand-dark focus-visible:outline-none focus-visible:ring-1",
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
