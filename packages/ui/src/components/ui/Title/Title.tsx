import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@rola/tailwind-config/utils";

const titleVariants = cva("text-center font-semibold", {
  variants: {
    order: {
      1: "text-4xl",
      2: "text-3xl",
      3: "text-2xl",
      4: "text-xl",
      5: "text-lg",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    order: 1,
    align: "center",
  },
});

type TitleProps = React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof titleVariants> & {
    asChild?: boolean;
  };

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
  (
    {
      className,
      children,
      order = 1,
      align = "center",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const heading = `h${order?.toString()}`;
    const Component = asChild ? Slot : heading;

    return (
      <Component
        ref={ref}
        className={cn(titleVariants({ order, align }), className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Title.displayName = "Title";

export type { TitleProps };
export { Title, titleVariants };
