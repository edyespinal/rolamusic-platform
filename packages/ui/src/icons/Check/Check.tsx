import { Check } from "lucide-react";
import { defaultSize, defaultStrokeWidth } from "../constants";

function CheckIcon({
  size = defaultSize,
  strokeWidth = defaultStrokeWidth,
  className = "",
}) {
  return <Check size={size} strokeWidth={strokeWidth} className={className} />;
}

export { CheckIcon };
