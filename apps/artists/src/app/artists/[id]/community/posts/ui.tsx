import { ArtistPost } from "@rola/services/schemas";
import { postTypesLabels } from "@rola/services/utils";
import {
  Button,
  Container,
  Label,
  Switch,
  Text,
  Title,
} from "@rola/ui/components";
import { PlusIcon } from "@rola/ui/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ArtistPostsPageUI({
  artistId,
  posts,
}: {
  artistId: string;
  posts: Array<ArtistPost & { tier: string }>;
}) {
  return (
    <Container className="pb-24">
      <Container className="flex justify-between">
        <Title order={2} align="left" underline className="pb-12">
          Mi contenido
        </Title>
        <Link href={`/artists/${artistId}/community/posts/new`}>
          <Button size="sm" variant="outline">
            <PlusIcon className="mr-2" />
            Crear publicación
          </Button>
        </Link>
      </Container>

      <Container className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-background rounded-xl px-6 py-4">
            <Title order={3} align="left">
              {post.title}
            </Title>
            <Text className="text-brand font-semibold">
              Subscripción: {post.tier}
            </Text>
            <Text className="font-semibold">
              Tipo: {postTypesLabels[post.type]}
            </Text>
            <span className="flex items-center gap-2 pb-8">
              <Label htmlFor="active">Activo</Label>
              <Switch id="active" className="text-xs" checked={post.active} />
            </span>

            <p>{post.caption}</p>
            <p>{post.url}</p>
          </div>
        ))}
      </Container>
    </Container>
  );
}

export { ArtistPostsPageUI };
