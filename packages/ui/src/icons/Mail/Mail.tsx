import { Mail } from "lucide-react";
import { defaultSize, defaultStrokeWidth } from "../constants";

function MailIcon({
  size = defaultSize,
  strokeWidth = defaultStrokeWidth,
  className = "",
}) {
  return <Mail size={size} strokeWidth={strokeWidth} className={className} />;
}

export { MailIcon };
