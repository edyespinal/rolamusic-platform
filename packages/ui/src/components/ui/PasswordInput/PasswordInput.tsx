import React from "react";
import { cn } from "@rola/tailwind-config/utils";
import { Icon } from "../Icon/Icon";
import { Input } from "../Input/Input";

type PasswordInputProps = React.InputHTMLAttributes<HTMLInputElement>;

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
      <div className="relative flex items-center gap-2">
        <Input
          ref={ref}
          type={showPassword ? "text" : "password"}
          className={cn(className)}
          {...props}
        />
        {showPassword ? (
          <Icon
            name="eye-off"
            className="absolute right-3 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          />
        ) : (
          <Icon
            name="eye"
            className="absolute right-3 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          />
        )}
      </div>
    );
  }
);
PasswordInput.displayName = "Input";

export type { PasswordInputProps };
export { PasswordInput };
