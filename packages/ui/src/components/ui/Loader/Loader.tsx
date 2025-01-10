import { Loader2 } from "lucide-react";

const loaderVariants = {
  xs: 20,
  sm: 24,
  md: 32,
  lg: 40,
  xl: 48,
};

type LoaderProps = {
  size?: keyof typeof loaderVariants;
};

const Loader = ({ size = "md" }: LoaderProps) => {
  return (
    <Loader2
      size={loaderVariants[size]}
      strokeWidth={2}
      className="text-brand animate-spin antialiased"
    />
  );
};

export type { LoaderProps };
export { Loader, loaderVariants };
