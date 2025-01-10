import { Trash } from "lucide-react";
import { defaultSize, defaultStrokeWidth } from "../constants";

function TrashIcon({
  size = defaultSize,
  strokeWidth = defaultStrokeWidth,
  className = "",
}) {
  return <Trash size={size} strokeWidth={strokeWidth} className={className} />;
}

export { TrashIcon };
