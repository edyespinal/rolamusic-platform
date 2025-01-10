import { Instagram } from "lucide-react";
import { defaultSize, defaultStrokeWidth } from "../constants";

function InstagramIcon({
  size = defaultSize,
  strokeWidth = defaultStrokeWidth,
  className = "",
}) {
  return (
    <Instagram size={size} strokeWidth={strokeWidth} className={className} />
  );
}

export { InstagramIcon };
