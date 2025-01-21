import { Heart } from "lucide-react";
import { defaultSize, defaultStrokeWidth } from "../constants";

function HeartIcon({
  size = defaultSize,
  strokeWidth = defaultStrokeWidth,
  className = "",
}) {
  return <Heart size={size} strokeWidth={strokeWidth} className={className} />;
}

export { HeartIcon };
