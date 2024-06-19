import { cn } from "../../../lib/utils";

type ComponentProps = {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  align?: "left" | "center" | "right";
};

function Underline(props: ComponentProps) {
  const { size = "md", align = "center" } = props;
  const sizeMap = {
    xs: "w-16 h-1 mt-0",
    sm: "w-24 h-1 mt-0",
    md: "w-32 h-1.5 mt-1",
    lg: "w-40 h-1.5 mt-1",
    xl: "w-48 h-1.5 mt-1",
  };

  const alignMap = {
    left: "ml-0",
    center: "mx-auto",
    right: "mr-0",
  };

  return (
    <span
      className={cn("block bg-brand", alignMap[align], sizeMap[size])}
    ></span>
  );
}

export { Underline };
