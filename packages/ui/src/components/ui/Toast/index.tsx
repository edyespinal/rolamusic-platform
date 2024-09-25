"use client";

import { cn } from "@rola/tailwind-config/utils";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "./toast";
import { useToast } from "./use-toast";

function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({
        id,
        title,
        description,
        action,
        icon,
        variant = "default",
        ...props
      }) {
        return (
          <Toast key={id} variant={variant} {...props}>
            {icon && (
              <span
                className={cn(
                  "rounded-full p-4",
                  variant === "default" ? "bg-green-800" : "bg-destructive"
                )}
              >
                {icon}
              </span>
            )}
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}

export { Toaster, useToast };
