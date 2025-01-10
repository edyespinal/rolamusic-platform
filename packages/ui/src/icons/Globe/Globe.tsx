import { Globe } from "lucide-react";
import { defaultSize, defaultStrokeWidth } from "../constants";

function GlobeIcon({
  size = defaultSize,
  strokeWidth = defaultStrokeWidth,
  className = "",
}) {
  return <Globe size={size} strokeWidth={strokeWidth} className={className} />;
}

export { GlobeIcon };
