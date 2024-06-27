import { Icon } from "../Icon";

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
    <Icon
      name="loader-2"
      size={loaderVariants[size]}
      strokeWidth={2}
      className="animate-spin text-brand antialiased"
    />
  );
};

export type { LoaderProps };
export { Loader, loaderVariants };
