import { Slot } from "@radix-ui/react-slot";
import { cn } from "@rola/tailwind-config/utils";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const textVariants = cva("", {
  variants: {
    size: {
      sm: "prose-sm",
      md: "prose-base",
      lg: "prose-lg",
      xl: "prose-xl",
      "2xl": "prose-2xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type TextProps = React.HTMLAttributes<HTMLParagraphElement> &
  VariantProps<typeof textVariants> & {
    asChild?: boolean;
  };

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size, asChild, ...props }, ref) => {
    const Component = asChild ? Slot : "p";
    return (
      <Component
        ref={ref}
        className={cn(textVariants({ size, className }))}
        {...props}
      />
    );
  }
);

Text.displayName = "Text";

export type { TextProps };
export { Text, textVariants };
