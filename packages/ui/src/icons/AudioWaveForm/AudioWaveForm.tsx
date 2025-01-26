import { AudioWaveform } from "lucide-react";
import { defaultSize, defaultStrokeWidth } from "../defaultValues";
import { IconProps } from "../types";

function AudioWaveFormIcon({
  size = defaultSize,
  strokeWidth = defaultStrokeWidth,
  className = "",
  ...props
}: IconProps) {
  return (
    <AudioWaveform
      size={size}
      strokeWidth={strokeWidth}
      className={className}
    />
  );
}

export { AudioWaveFormIcon };
