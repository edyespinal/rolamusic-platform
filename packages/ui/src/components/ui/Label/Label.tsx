import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "@rola/tailwind-config/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants> & { required?: boolean }
>(({ className, required, ...props }, ref) => (
  <React.Fragment>
    <LabelPrimitive.Root
      ref={ref}
      className={cn(labelVariants(), className)}
      {...props}
    />
    {required && <span className="ml-1 text-destructive">*</span>}
  </React.Fragment>
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
