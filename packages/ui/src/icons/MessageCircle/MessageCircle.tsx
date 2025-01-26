import { MessageCircle } from "lucide-react";
import { defaultSize, defaultStrokeWidth } from "../defaultValues";
import { IconProps } from "../types";

function MessageCircleIcon({
  size = defaultSize,
  strokeWidth = defaultStrokeWidth,
  className = "",
  ...props
}: IconProps) {
  return (
    <MessageCircle
      size={size}
      strokeWidth={strokeWidth}
      className={className}
    />
  );
}

export { MessageCircleIcon };
