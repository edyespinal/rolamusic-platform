import { MessageCircle } from "lucide-react";
import { defaultSize, defaultStrokeWidth } from "../constants";

function MessageCircleIcon({
  size = defaultSize,
  strokeWidth = defaultStrokeWidth,
  className = "",
}) {
  return (
    <MessageCircle
      size={size}
      strokeWidth={strokeWidth}
      className={className}
    />
  );
}

export { MessageCircleIcon };
