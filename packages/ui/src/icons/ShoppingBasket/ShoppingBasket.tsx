import { ShoppingBasket } from "lucide-react";
import { defaultSize, defaultStrokeWidth } from "../defaultValues";
import { IconProps } from "../types";

function ShoppingBasketIcon({
  size = defaultSize,
  strokeWidth = defaultStrokeWidth,
  className = "",
  ...props
}: IconProps) {
  return (
    <ShoppingBasket
      size={size}
      strokeWidth={strokeWidth}
      className={className}
    />
  );
}

export { ShoppingBasketIcon };
