import { LogOut } from "lucide-react";
import { defaultSize, defaultStrokeWidth } from "../defaultValues";
import { IconProps } from "../types";

function LogOutIcon({
  size = defaultSize,
  strokeWidth = defaultStrokeWidth,
  className = "",
  ...props
}: IconProps) {
  return (
    <LogOut
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    />
  );
}

export { LogOutIcon };
