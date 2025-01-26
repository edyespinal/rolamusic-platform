import { Music2 } from "lucide-react";
import { defaultSize, defaultStrokeWidth } from "../defaultValues";
import { IconProps } from "../types";

function Music2Icon({
  size = defaultSize,
  strokeWidth = defaultStrokeWidth,
  className = "",
  ...props
}: IconProps) {
  return (
    <Music2
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    />
  );
}

export { Music2Icon };
