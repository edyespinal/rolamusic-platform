import { ArrowRight } from "lucide-react";
import { defaultSize, defaultStrokeWidth } from "../constants";

function ArrowRightIcon({
  size = defaultSize,
  strokeWidth = defaultStrokeWidth,
  className = "",
}) {
  return (
    <ArrowRight size={size} strokeWidth={strokeWidth} className={className} />
  );
}

export { ArrowRightIcon };
