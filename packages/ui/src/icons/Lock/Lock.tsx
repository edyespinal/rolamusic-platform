import { Lock } from "lucide-react";
import { defaultSize, defaultStrokeWidth } from "../defaultValues";
import { IconProps } from "../types";

function LockIcon({
  size = defaultSize,
  strokeWidth = defaultStrokeWidth,
  className = "",
  ...props
}: IconProps) {
  return (
    <Lock
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    />
  );
}

export { LockIcon };
