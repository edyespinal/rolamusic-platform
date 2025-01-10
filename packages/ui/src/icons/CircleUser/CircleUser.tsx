import { CircleUser } from "lucide-react";
import { defaultSize, defaultStrokeWidth } from "../constants";

function CircleUserIcon({
  size = defaultSize,
  strokeWidth = defaultStrokeWidth,
  className = "",
}) {
  return (
    <CircleUser size={size} strokeWidth={strokeWidth} className={className} />
  );
}

export { CircleUserIcon };
