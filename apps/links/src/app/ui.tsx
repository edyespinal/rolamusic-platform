"use client";

import React from "react";
import { Button, Container, Icon, Logo, Text } from "@rola/ui/components";
import { Platforms, links } from "@helpers/links";
import Image from "next/image";
import Talks from "@assets/img/rola-talks.jpg";
import Sessions from "@assets/img/rola-sessions.jpg";
import Shop from "@assets/img/rola-shop.webp";
import RockHand from "@assets/img/rock-hand.svg";

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
        className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3"
      >
        <Container>
          <Text className="text-center">ROLA Talks</Text>
          <Image
            src={Talks}
            alt="Rola Talks"
            className="rounded"
            onClick={() => redirectTo("rolaTalks")}
          />
        </Container>
        <Container>
          <Text className="text-center">ROLA Sessions</Text>
          <Image
            src={Sessions}
            alt="Rola Sessions"
            className="rounded"
            onClick={() => redirectTo("rolaSessions")}
          />
        </Container>
        <Container>
          <Text className="text-center">ROLA Shop</Text>
          <Image
            src={Shop}
            alt="Rola Shop"
            className="rounded"
            onClick={() => redirectTo("rolaShop")}
          />
        </Container>
      </Container>

      <Container className="mb-16 w-60 items-center space-y-4">
        <Button full onClick={() => redirectTo("youtube")}>
          <Icon name="youtube" className="mr-2" />
          YouTube
        </Button>
        <Button full onClick={() => redirectTo("instagram")}>
          <Icon name="instagram" className="mr-2" />
          Instagram
        </Button>
        <Button full onClick={() => redirectTo("spotify")}>
          <Icon name="audio-waveform" className="mr-2" />
          Spotify
        </Button>
        <Button full onClick={() => redirectTo("tiktok")}>
          <Icon name="music-2" className="mr-2" />
          TikTok
        </Button>
        <Button full onClick={() => redirectTo("rolaShop")}>
          <Icon name="shopping-basket" className="mr-2" />
          ROLA Shop
        </Button>
        <Button full onClick={() => redirectTo("web")}>
          <Icon name="globe" className="mr-2" />
          Web
        </Button>
      </Container>
      <Image src={RockHand} alt="Rock Hand" className="mx-auto size-8" />
    </main>
  );
}

export { HomePageUI };
