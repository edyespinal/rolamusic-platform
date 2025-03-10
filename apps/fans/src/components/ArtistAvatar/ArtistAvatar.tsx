import { cn } from "@rola/tailwind-config/utils";
import { Avatar, AvatarFallback, AvatarImage, Text } from "@rola/ui/components";
import { cva, VariantProps } from "class-variance-authority";

const artistAvatarVariants = cva("", {
  variants: {
    size: {
      default: "size-40",
      sm: "size-24",
      md: "size-32",
      lg: "size-48",
      xl: "size-64",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type ArtistsAvatarProps = VariantProps<typeof artistAvatarVariants> & {
  image: string | undefined;
  name: string;
  className?: string;
};

function ArtistAvatar({ image, name, size, className }: ArtistsAvatarProps) {
  return (
    <Avatar className={cn(artistAvatarVariants({ size }), className)}>
      <AvatarImage src={image} />
      <AvatarFallback>
        <Text
          className={cn(
            "font-semibold",
            size === "sm" && "text-4xl",
            size === "md" && "text-5xl",
            size === "default" && "text-6xl",
            size === "lg" && "text-7xl",
            size === "xl" && "text-8xl"
          )}
        >
          {name[0]}
        </Text>
      </AvatarFallback>
    </Avatar>
  );
}

export { ArtistAvatar };
