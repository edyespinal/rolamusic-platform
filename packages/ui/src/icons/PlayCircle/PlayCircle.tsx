import { PlayCircle } from "lucide-react";
import { defaultSize, defaultStrokeWidth } from "../constants";

function PlayCircleIcon({
  size = defaultSize,
  strokeWidth = defaultStrokeWidth,
  className = "",
}) {
  return (
    <PlayCircle size={size} strokeWidth={strokeWidth} className={className} />
  );
}

export { PlayCircleIcon };
