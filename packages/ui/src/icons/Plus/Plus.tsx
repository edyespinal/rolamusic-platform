import { Plus } from "lucide-react";
import { defaultSize, defaultStrokeWidth } from "../constants";

function PlusIcon({
  size = defaultSize,
  strokeWidth = defaultStrokeWidth,
  className = "",
}) {
  return <Plus size={size} strokeWidth={strokeWidth} className={className} />;
}

export { PlusIcon };
