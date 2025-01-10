import { Music2 } from "lucide-react";
import { defaultSize, defaultStrokeWidth } from "../constants";

function Music2Icon({
  size = defaultSize,
  strokeWidth = defaultStrokeWidth,
  className = "",
}) {
  return <Music2 size={size} strokeWidth={strokeWidth} className={className} />;
}

export { Music2Icon };
