"use client";

import React from "react";
import { Button, Container, Logo, Text, Title } from "@rola/ui/components";
import { Platforms, links } from "@helpers/links";
import Image from "next/image";
import Talks from "@assets/img/rola-talks.jpg";
import Sessions from "@assets/img/rola-sessions.jpg";

function HomePageUI() {
  const redirectTo = (platform: Platforms) => {
    window.open(links[platform], "_blank");
  };
  return (
    <main className="flex min-h-screen flex-col items-center px-8 py-24">
      <div className="pb-12 text-center">
        <Logo variant="vertical" />
      </div>

      <Container
        size="sm"
        className="mb-8 grid grid-cols-1 gap-4 lg:grid-cols-2"
      >
        <Container>
          <Text className="text-center">Lo último de ROLA Talks</Text>
          <Image
            src={Talks}
            alt="Rola Talks"
            className="rounded"
            onClick={() => redirectTo("rolaTalks")}
          />
        </Container>
        <Container>
          <Text className="text-center">Disfruta de las ROLA Sessions</Text>
          <Image
            src={Sessions}
            alt="Rola Sessions"
            className="rounded"
            onClick={() => redirectTo("rolaSessions")}
          />
        </Container>
      </Container>

      <div className="w-60 items-center space-y-4">
        <Button full onClick={() => redirectTo("youtube")}>
          YouTube
        </Button>
        <Button full onClick={() => redirectTo("instagram")}>
          Instagram
        </Button>
        <Button full onClick={() => redirectTo("spotify")}>
          Spotify
        </Button>
        <Button full onClick={() => redirectTo("tiktok")}>
          TikTok
        </Button>
        <Button full onClick={() => redirectTo("web")}>
          Web
        </Button>
      </div>
    </main>
  );
}

export { HomePageUI };
