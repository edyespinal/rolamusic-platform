import { Slot } from "@radix-ui/react-slot";
import { cn } from "@rola/tailwind-config/utils";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const underlineVariants = cva("block bg-brand", {
  variants: {
    size: {
      xs: "w-16 h-1 mt-0",
      sm: "w-24 h-1 mt-0",
      md: "w-32 h-1.5 mt-1",
      lg: "w-40 h-1.5 mt-1",
      xl: "w-48 h-2 mt-1",
    },
    align: {
      left: "ml-0",
      center: "mx-auto",
      right: "mr-0",
    },
  },
  defaultVariants: {
    size: "md",
    align: "center",
  },
});

type UnderlineProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof underlineVariants> & {
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    align?: "left" | "center" | "right";
    asChild?: boolean;
  };

const Underline = React.forwardRef<HTMLSpanElement, UnderlineProps>(
  (
    { className, size = "md", align = "center", asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "span";

    return (
      <Comp
        ref={ref}
        className={cn(underlineVariants({ size, align }), className)}
        {...props}
      />
    );
  }
);

Underline.displayName = "Underline";

export type { UnderlineProps };
export { Underline, underlineVariants };
