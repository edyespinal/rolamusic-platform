import { AudioWaveform } from "lucide-react";
import { defaultSize, defaultStrokeWidth } from "../constants";

function AudioWaveFormIcon({
  size = defaultSize,
  strokeWidth = defaultStrokeWidth,
  className = "",
}) {
  return (
    <AudioWaveform
      size={size}
      strokeWidth={strokeWidth}
      className={className}
    />
  );
}

export { AudioWaveFormIcon };
