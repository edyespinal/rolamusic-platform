import Image from "next/image";
import Link from "next/link";
import { Artist } from "@rola/services/schemas";
import { formatGenres, Genre } from "@rola/services/utils";
import { Text, Title } from "@rola/ui/components";
import { ArtistAvatar } from "@components/ArtistAvatar/ArtistAvatar";

function ArtistCard({
  id,
  image,
  name,
  genres,
}: {
  id: string;
  image: string | undefined;
  name: string;
  genres: Genre[];
}) {
  return (
    <Link href={`/artists/${id}`} className="w-32 text-center lg:w-48">
      <ArtistAvatar image={image} name={name} className="mx-auto mb-1" />
      {genres && (
        <Text className="text-brand line-clamp-1 text-sm lowercase">
          {formatGenres(genres)}
        </Text>
      )}
    </Link>
  );
}

export { ArtistCard };
