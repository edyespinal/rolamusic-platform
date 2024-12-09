export type Genre = keyof typeof genresMap;

export const genresMap = {
  ACUSTICO: "Acústico",
  ALTERNATIVO: "Alternativo",
  BLUES: "Blues",
  CLASICA: "Clásica",
  COUNTRY: "Country",
  CRISTIANA: "Cristiana",
  CUMBIA: "Cumbia",
  ELECTRONICA: "Electrónica",
  FOLK: "Folk",
  FUNK: "Funk",
  HIP_HOP: "Hip-Hop",
  INDIE: "Indie",
  JAZZ: "Jazz",
  K_POP: "K-Pop",
  LATIN: "Latin",
  METAL: "Metal",
  POP: "Pop",
  PUNK: "Punk",
  REGGAE: "Reggae",
  REGGAETON: "Reggaeton",
  ROCK: "Rock",
  SALSA: "Salsa",
  SOCIAL_PROTESTA: "Social/Protesta",
  SOUL: "Soul",
  TANGO: "Tango",
  TRAP: "Trap",
  TROVA: "Trova",
  VARIOS: "Varios",
  OTRO: "Otro",
} as const;

export const genresList = Object.keys(genresMap) as Genre[];

export const genresListOptions = genresList.map((genre: Genre) => ({
  value: genre,
  label: genresMap[genre],
}));

export const formatGenres = (genres: Genre[]): string => {
  return genres
    .slice(0, 3)
    .map((genre) => genresMap[genre].toLowerCase())
    .join(" | ");
};
