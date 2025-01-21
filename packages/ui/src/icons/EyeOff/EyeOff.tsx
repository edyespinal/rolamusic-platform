import { EyeOff } from "lucide-react";
import { defaultSize, defaultStrokeWidth } from "../constants";

function EyeOffIcon({
  size = defaultSize,
  strokeWidth = defaultStrokeWidth,
  className = "",
}) {
  return <EyeOff size={size} strokeWidth={strokeWidth} className={className} />;
}

export { EyeOffIcon };
