import { Eye } from "lucide-react";
import { defaultSize, defaultStrokeWidth } from "../constants";

function EyeIcon({
  size = defaultSize,
  strokeWidth = defaultStrokeWidth,
  className = "",
}) {
  return <Eye size={size} strokeWidth={strokeWidth} className={className} />;
}

export { EyeIcon };
