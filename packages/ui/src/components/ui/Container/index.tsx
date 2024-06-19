import { Slot } from "@radix-ui/react-slot";
import React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const containerVariants = cva("mx-auto w-full", {
  variants: {
    size: {
      sm: "max-w-screen-sm",
      md: "max-w-screen-md",
      lg: "max-w-screen-lg",
      xl: "max-w-screen-xl",
      full: "max-w-full",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type ContainerProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof containerVariants> & {
    asChild?: boolean;
  };

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        ref={ref}
        className={cn(containerVariants({ size, className }))}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Container.displayName = "Container";

export type { ContainerProps };
export { Container };
