import { AlertCircle } from "lucide-react";
import { defaultSize, defaultStrokeWidth } from "../constants";

function AlertCircleIcon({
  size = defaultSize,
  strokeWidth = defaultStrokeWidth,
  className = "",
}) {
  return (
    <AlertCircle size={size} strokeWidth={strokeWidth} className={className} />
  );
}

export { AlertCircleIcon };
