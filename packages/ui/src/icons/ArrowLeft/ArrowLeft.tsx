import { ArrowLeft } from "lucide-react";
import { defaultSize, defaultStrokeWidth } from "../constants";

function ArrowLeftIcon({
  size = defaultSize,
  strokeWidth = defaultStrokeWidth,
  className = "",
}) {
  return (
    <ArrowLeft size={size} strokeWidth={strokeWidth} className={className} />
  );
}

export { ArrowLeftIcon };
