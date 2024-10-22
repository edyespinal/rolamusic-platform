"use client";

import { Header } from "@components/Header/Header";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Container,
  Loader,
  Title,
} from "@rola/ui/components";
import { UploadOverlay } from "@components/UploadOverlay/UploadOverlay";
import { useUser } from "@clerk/nextjs";

function HomePageUI() {
  return (
    <Container>
      <Header />
      <Container size="xl" className="flex flex-col gap-4 pb-24 pt-12">
        <Title underline>Mi Perfil</Title>

        <UploadOverlay className="mx-auto size-48">
          <Avatar className="size-full">
            {/* {!isLoaded ? <Loader /> : <AvatarImage src={user?.imageUrl} />} */}
            <AvatarFallback>
              <Title order={2}>{/* user?.firstName?.[0] ??  */ "R"}</Title>
            </AvatarFallback>
          </Avatar>
        </UploadOverlay>
      </Container>
    </Container>
  );
}

export { HomePageUI };
