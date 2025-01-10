import { MoreVertical } from "lucide-react";
import { defaultSize, defaultStrokeWidth } from "../constants";

function MoreVerticalIcon({
  size = defaultSize,
  strokeWidth = defaultStrokeWidth,
  className = "",
}) {
  return (
    <MoreVertical size={size} strokeWidth={strokeWidth} className={className} />
  );
}

export { MoreVerticalIcon };
