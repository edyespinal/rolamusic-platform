import { Vertical } from "./variants/Vertical";
import { Horizontal } from "./variants/Horizontal";
import { Main } from "./variants/Main";
import { Icon } from "./variants/Icon";

type ComponentProps = {
  variant?: "default" | "horizontal" | "vertical" | "icon";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  alt?: boolean;
};

function Logo(props: ComponentProps) {
  const { variant = "default", size = "sm", alt = false } = props;

  const sizeMap = {
    xs: 120,
    sm: 170,
    md: 300,
    lg: 400,
    xl: 500,
  };

  switch (variant) {
    case "horizontal":
      return <Horizontal size={sizeMap[size]} />;

    case "vertical":
      return <Vertical size={sizeMap[size]} />;

    case "icon":
      return <Icon size={sizeMap[size]} alt={alt} />;

    default:
      return <Main size={sizeMap[size]} />;
  }
}

export { Logo };
