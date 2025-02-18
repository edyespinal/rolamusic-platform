import Link from "next/link";
import { formatGenres, Genre } from "@rola/services/utils";
import { Text } from "@rola/ui/components";
import { ArtistAvatar } from "@components/ArtistAvatar/ArtistAvatar";
import { cn } from "@rola/tailwind-config/utils";

function ArtistCard({
  id,
  image,
  name,
  genres,
  size = "default",
  classNames,
}: {
  id: string;
  image: string | undefined;
  name: string;
  genres: Genre[];
  size?: "default" | "sm";
  classNames?: string;
}) {
  return (
    <Link
      href={`/artists/${id}`}
      className={cn("max-w-48 text-center", classNames)}
    >
      <ArtistAvatar
        image={image}
        name={name}
        size={size === "default" ? "default" : "md"}
        className="mx-auto mb-1"
      />
      <Text className="line-clamp-1 font-semibold">{name}</Text>
      {genres && (
        <Text className="text-brand line-clamp-1 text-sm lowercase">
          {formatGenres(genres)}
        </Text>
      )}
    </Link>
  );
}

export { ArtistCard };
