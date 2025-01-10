import { X } from "lucide-react";
import { defaultSize, defaultStrokeWidth } from "../constants";

function XIcon({
  size = defaultSize,
  strokeWidth = defaultStrokeWidth,
  className = "",
}) {
  return <X size={size} strokeWidth={strokeWidth} className={className} />;
}

export { XIcon };
