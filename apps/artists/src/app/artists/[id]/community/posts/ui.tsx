import { ArtistPost } from "@rola/services/schemas";
import { postTypesLabels } from "@rola/services/utils";
import { Button, Container, Switch, Title } from "@rola/ui/components";
import { PlusIcon } from "@rola/ui/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ArtistPostsPageUI({
  artistId,
  posts,
}: {
  artistId: string;
  posts: ArtistPost[];
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

      <Container className="flex flex-col gap-4">
        {posts.map((post) => (
          <div key={post.id} className="border-gray rounded-xl border-2 p-4">
            <h1>{postTypesLabels[post.type]}</h1>
            <Switch checked={post.active} />
            <p>{post.caption}</p>
            <p>{post.url}</p>
            <p>{post.access}</p>
            {post.type === "IMAGE" && (
              <Image
                src={post.url || ""}
                alt="{post.caption}"
                width={200}
                height={200}
              />
            )}
          </div>
        ))}
      </Container>
    </Container>
  );
}

export { ArtistPostsPageUI };
