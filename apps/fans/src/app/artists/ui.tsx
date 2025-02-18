"use client";

import { ArtistCard } from "@components/ArtistCard/ArtistCard";
import { Artist } from "@rola/services/schemas";
import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Container,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  Text,
  Title,
} from "@rola/ui/components";

import { useArtistsPageData } from "./data";
import { SignedIn } from "@clerk/nextjs";
import { useIsMobile } from "@rola/ui/hooks";
import { PageHeader } from "@components/PageHeader/PageHeader";
import { cn } from "@rola/tailwind-config/utils";
import { Genre } from "@rola/services/utils";

function ArtistsPageUI({
  artists,
  supporting,
}: {
  artists: Artist[];
  supporting: Array<{
    id: string;
    name: string;
    profileURL: string;
    genres: Genre[];
    tier: string;
    active: boolean;
  }> | null;
}) {
  const {
    displayedArtists,
    selectedSorting,
    sortingOptions,
    handleSortingChange,
    selectedFilter,
    filterOptions,
    handleFilterChange,
  } = useArtistsPageData(artists);

  const isMobile = useIsMobile(768);

  return (
    <Container>
      <PageHeader background="bg-[url('/static/img/artists-header-mobile.png')] lg:bg-[url('/static/img/artists-header.png')]">
        <Container
          size="xl"
          className="flex h-full justify-center lg:mt-0 lg:items-center"
        >
          <Title
            type="rola"
            order={2}
            className="mt-8 text-center lg:ml-auto lg:mt-0 lg:text-right"
          >
            Apoya a tus
            <br />
            artistas favoritos
          </Title>
        </Container>
      </PageHeader>

      <SignedIn>
        {supporting?.length ? (
          <Container size="md" className="py-12">
            <Title order={3} underline className="pb-8 uppercase">
              Mis artistas
            </Title>
            <Carousel
              opts={{ loop: true }}
              className="mx-auto max-w-60 lg:max-w-screen-sm"
            >
              <CarouselContent>
                {supporting.map((artist) => {
                  if (!artist.active) {
                    return null;
                  }

                  return (
                    <CarouselItem
                      key={artist.id}
                      className={cn(
                        supporting.length === 1
                          ? "basis-full"
                          : supporting.length === 2
                            ? "lg:basis-1/2"
                            : "lg:basis-1/3"
                      )}
                    >
                      <ArtistCard
                        id={artist.id}
                        image={artist.profileURL}
                        name={artist.name}
                        genres={artist.genres}
                        size={isMobile ? "sm" : "default"}
                      />
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </Container>
        ) : null}
      </SignedIn>

      <Container size="xl" className="pb-24 pt-12">
        <Title order={3} underline className="pb-8 uppercase">
          Artistas ROLA
        </Title>
        <Container className="flex flex-col items-center justify-between gap-4 pb-12 lg:flex-row">
          <div className="grid grid-cols-[auto_1fr] items-center gap-4">
            <Text>Ordenar por:</Text>
            <Select onValueChange={handleSortingChange}>
              <SelectTrigger
                className="w-48 border-none bg-transparent outline-none"
                style={{
                  borderBottom: "1px solid hsl(178 90% 38%)",
                  borderRadius: 0,
                }}
              >
                {sortingOptions.find(
                  (option) => option.value === selectedSorting
                )?.label ?? " - "}
              </SelectTrigger>
              <SelectContent>
                {sortingOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-[auto_1fr] items-center gap-4">
            <Text>Filtrar por:</Text>
            <Select onValueChange={handleFilterChange}>
              <SelectTrigger
                className="w-48 border-none bg-transparent outline-none"
                style={{
                  borderBottom: "1px solid hsl(178 90% 38%)",
                  borderRadius: 0,
                  outline: "none",
                }}
              >
                {
                  filterOptions.find(
                    (filter) => filter.value === selectedFilter
                  )?.label
                }
              </SelectTrigger>
              <SelectContent>
                {filterOptions.map((filter) => (
                  <SelectItem key={filter.value} value={filter.value}>
                    {filter.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </Container>
        <Container className="flex flex-wrap justify-center gap-8 px-4 lg:px-0">
          {displayedArtists.map((artist) => (
            <ArtistCard
              key={artist.id}
              id={artist.id}
              image={artist.profileURL}
              name={artist.name}
              genres={artist.genres}
              size={isMobile ? "sm" : "default"}
            />
          ))}
        </Container>

        <SignedIn>
          {supporting?.length === 0 ? (
            <Container className="px-4 pt-24 text-center lg:px-0">
              <Title order={3} underline className="pb-8 uppercase">
                Mis Artistas
              </Title>
              <div className="bg-background mx-auto max-w-lg rounded px-12 py-8">
                <Text>
                  Ha llegado el momento de cambiar la historia de la música
                  independiente
                </Text>
                <Title type="rola" order={5} className="text-brand">
                  Apoya a tus artistas favoritos
                </Title>
              </div>
            </Container>
          ) : null}
        </SignedIn>
      </Container>

      <Container className="bg-[url('/static/img/artists-footer.png')] bg-cover bg-center bg-no-repeat py-32">
        <Container size="xl" className="flex flex-col gap-y-8 px-4 lg:px-0">
          <Title type="rola" order={2} align="left" className="text-black">
            ¿Eres músico y te gustaría crear <br />
            tu propia comunidad de fans en ROLA?
          </Title>

          <Text className="max-w-screen-md">
            Acercar a tus seguidores y crear una comunidad con ellos no solo
            fortalece vínculos, también te brinda un soporte para que puedas
            seguir trabajando y dedicarle más tiempo y esfuerzo a los más
            importante, tu música.
          </Text>

          <a
            href="https://artists.rolamusic.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary">Quiero crear mi comunidad</Button>
          </a>
        </Container>
      </Container>
    </Container>
  );
}

export { ArtistsPageUI };
