"use client";

import Image from "next/image";
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
  Icon,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  Text,
  Title,
} from "@rola/ui/components";
import slide1 from "@assets/img/artists-slide-01.jpg";
import slide2Text from "@assets/img/artists-slide-02-txt.png";
import Link from "next/link";
import { useArtistsPageData } from "./data";

function ArtistsPageUI({ artists }: { artists: Artist[] }) {
  const {
    displayedArtists,
    selectedSorting,
    sortingOptions,
    handleSortingChange,
    selectedFilter,
    filterOptions,
    handleFilterChange,
  } = useArtistsPageData(artists);

  return (
    <Container>
      <Carousel className="relative -mt-20 mb-12 max-h-[75vh] w-full overflow-hidden">
        <CarouselContent>
          <CarouselItem>
            <Image
              src={slide1}
              alt="Apoya a tus artistas independientes favoritos"
              style={{ minWidth: "100%" }}
            />
          </CarouselItem>
          <CarouselItem className="bg-[url('/static/img/artists-slide-02.jpg')] bg-cover bg-no-repeat">
            <Container
              size="xl"
              className="z-0 flex h-full flex-col justify-center gap-4"
            >
              <Image
                src={slide2Text}
                alt="ROLA Talks. El podcast de la música independiente"
              />
              <Link href="/rola-talks">
                <Button>Descúbrelo</Button>
              </Link>
            </Container>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-8 z-10" />
        <CarouselNext className="absolute right-8 z-10" />
      </Carousel>

      <Container size="xl" className="pb-24">
        <Title order={3} underline className="pb-8 uppercase">
          Artistas
        </Title>

        <Container className="flex flex-col items-center justify-between gap-4 pb-8 lg:flex-row">
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

        <Container className="grid grid-cols-2 justify-items-center gap-x-2 gap-y-8 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-16 lg:gap-y-8">
          {displayedArtists.map((artist) => (
            <ArtistCard
              key={artist.id}
              id={artist.id}
              image={artist.profileURL}
              name={artist.name}
              genres={artist.genres}
            />
          ))}
        </Container>
      </Container>
    </Container>
  );
}

export { ArtistsPageUI };
