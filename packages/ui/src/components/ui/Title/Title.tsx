import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@rola/tailwind-config/utils";
import { Underline } from "../Underline/Underline";

const titleVariants = cva("", {
  variants: {
    type: {
      default: "!font-semibold",
      rola: "font-rola tracking-tighter",
    },
    order: {
      1: "text-3xl lg:text-4xl",
      2: "text-2xl lg:text-3xl",
      3: "text-xl lg:text-2xl",
      4: "text-lg lg:text-xl",
      5: "text-md lg:text-lg",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  compoundVariants: [
    {
      type: "rola",
      order: 1,
      className: "text-7xl lg:text-8xl !leading-[56px]",
    },
    {
      type: "rola",
      order: 2,
      className: "text-6xl lg:text-7xl !leading-[48px]",
    },
    {
      type: "rola",
      order: 3,
      className: "text-5xl lg:text-6xl !leading-10",
    },
    {
      type: "rola",
      order: 4,
      className: "text-4xl lg:text-5xl !leading-8",
    },
    {
      type: "rola",
      order: 5,
      className: "text-3xl lg:text-4xl !leading-6",
    },
  ],
  defaultVariants: {
    order: 1,
    align: "center",
  },
});

type TitleProps = React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof titleVariants> & {
    asChild?: boolean;
    underline?: boolean;
  };

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
  (
    {
      className,
      children,
      type = "default",
      order = 1,
      align = "center",
      underline = false,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const heading = `h${order?.toString()}`;
    const Component = asChild ? Slot : heading;
    const underlineAlign = align ?? "center";
    const underlineSize = order && order < 3 ? "md" : "xs";

    return (
      <Component
        ref={ref}
        className={cn(titleVariants({ type, order, align }), className)}
        {...props}
      >
        {children}
        {underline && (
          <Underline
            className="mt-2"
            align={underlineAlign}
            size={underlineSize}
          />
        )}
      </Component>
    );
  }
);

Title.displayName = "Title";

export type { TitleProps };
export { Title, titleVariants };
