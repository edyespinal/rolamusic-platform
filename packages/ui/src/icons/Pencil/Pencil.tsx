import { Pencil } from "lucide-react";
import { defaultSize, defaultStrokeWidth } from "../constants";

function PencilIcon({
  size = defaultSize,
  strokeWidth = defaultStrokeWidth,
  className = "",
}) {
  return <Pencil size={size} strokeWidth={strokeWidth} className={className} />;
}

export { PencilIcon };
