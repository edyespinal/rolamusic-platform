import { CreditCard } from "lucide-react";
import { defaultSize, defaultStrokeWidth } from "../defaultValues";
import { IconProps } from "../types";

function CreditCardIcon({
  size = defaultSize,
  strokeWidth = defaultStrokeWidth,
  className = "",
  ...props
}: IconProps) {
  return (
    <CreditCard
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    />
  );
}

export { CreditCardIcon };
