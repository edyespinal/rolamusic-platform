import { ShoppingBasket } from "lucide-react";
import { defaultSize, defaultStrokeWidth } from "../constants";

function ShoppingBasketIcon({
  size = defaultSize,
  strokeWidth = defaultStrokeWidth,
  className = "",
}) {
  return (
    <ShoppingBasket
      size={size}
      strokeWidth={strokeWidth}
      className={className}
    />
  );
}

export { ShoppingBasketIcon };
