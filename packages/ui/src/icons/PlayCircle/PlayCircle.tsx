import { PlayCircle } from "lucide-react";
import { defaultSize, defaultStrokeWidth } from "../defaultValues";
import { IconProps } from "../types";

function PlayCircleIcon({
  size = defaultSize,
  strokeWidth = defaultStrokeWidth,
  className = "",
  ...props
}: IconProps) {
  return (
    <PlayCircle
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    />
  );
}

export { PlayCircleIcon };
