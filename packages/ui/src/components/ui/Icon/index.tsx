import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import dynamic from "next/dynamic";

type ComponentProps = LucideProps & {
  name: keyof typeof dynamicIconImports;
  size?: number;
  strokeWidth?: number;
};

function Icon(props: ComponentProps) {
  const { name, size = 16, strokeWidth = 2 } = props;
  const LucideIcon = dynamic(dynamicIconImports[name]);

  return <LucideIcon size={size} strokeWidth={strokeWidth} {...props} />;
}

export { Icon };
