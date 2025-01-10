import { Youtube } from "lucide-react";
import { defaultSize, defaultStrokeWidth } from "../constants";

function YouTubeIcon({
  size = defaultSize,
  strokeWidth = defaultStrokeWidth,
  className = "",
}) {
  return (
    <Youtube size={size} strokeWidth={strokeWidth} className={className} />
  );
}

export { YouTubeIcon };
