import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@rola/tailwind-config/utils";
import { Icon } from "../Icon/Icon";

const buttonVariants = cva(
  "uppercase inline-flex items-center font-semibold justify-center whitespace-nowrap rounded-full text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      full: {
        true: "w-full",
        false: "",
      },
      variant: {
        default: "bg-brand text-black hover:bg-brand-dark",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-brand text-brand bg-transparent hover:text-brand-light hover:border-brand-light",
        secondary: "bg-secondary text-white hover:bg-secondary/80",
        ghost: "hover:bg-background rounded",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-7 py-2",
        xs: "h-7 px-3 text-xs",
        sm: "h-9 px-5 text-xs",
        lg: "h-11 px-9",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      full: false,
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
    asChild?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant,
      size,
      full,
      loading,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, full, className }))}
        disabled={loading}
        {...props}
      >
        {loading && <Icon name="loader-2" className="mr-2 animate-spin" />}
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export type { ButtonProps };
export { Button, buttonVariants };
