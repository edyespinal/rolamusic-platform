import { Artist } from "@rola/services/schemas";
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
        <Text className="text-6xl font-semibold">{name[0]}</Text>
      </AvatarFallback>
    </Avatar>
  );
}

export { ArtistAvatar };
