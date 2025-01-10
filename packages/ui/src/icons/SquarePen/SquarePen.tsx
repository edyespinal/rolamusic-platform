import { SquarePen } from "lucide-react";
import { defaultSize, defaultStrokeWidth } from "../constants";

function SquarePenIcon({
  size = defaultSize,
  strokeWidth = defaultStrokeWidth,
  className = "",
}) {
  return (
    <SquarePen size={size} strokeWidth={strokeWidth} className={className} />
  );
}

export { SquarePenIcon };
