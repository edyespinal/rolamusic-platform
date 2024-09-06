import { Slot } from "@radix-ui/react-slot";
import React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@rola/tailwind-config/utils";

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
    size: "full",
  },
});

type ContainerProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof containerVariants> & {
    asChild?: boolean;
    as?: React.ElementType;
  };

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      children,
      className,
      size,
      as: asElement = "div",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : asElement;

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
