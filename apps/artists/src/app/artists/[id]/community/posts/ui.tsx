import React from "react";
import Link from "next/link";
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

      <Container className="grid gap-6 lg:grid-cols-2">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-background-dark rounded-xl px-6 py-4"
          >
            <Title order={3} align="left">
              {post.title}
            </Title>
            <Text className="text-brand font-semibold">
              Suscripción: {post.tier}
            </Text>
            <Text className="font-semibold">
              Tipo: {postTypesLabels[post.type]}
            </Text>
            <span className="flex items-center gap-2 pb-8">
              <Label htmlFor="active">Activo</Label>
              <Switch id="active" className="text-xs" checked={post.active} />
            </span>
          </div>
        ))}
      </Container>
    </Container>
  );
}

export { ArtistPostsPageUI };
