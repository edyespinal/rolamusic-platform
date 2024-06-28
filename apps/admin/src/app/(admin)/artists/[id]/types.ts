import { Artist, ArtistCommunity, User } from "@rola/services/schemas";

export type PageProps = {
  params: {
    id: string;
  };
};

export type PageUIProps = {
  artist: Artist;
  admin: User;
  community: ArtistCommunity;
};

export type FormValues = {
  artist: Artist;
  community: ArtistCommunity;
};
