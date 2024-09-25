export const links = {
  youtube: "https://tapthe.link/rola-youtube",
  rolaTalks: "https://tapthe.link/rola-talks",
  rolaSessions: "https://tapthe.link/rola-sessions",
  rolaShop: "https://tapthe.link/rola-shop",
  instagram: "https://tapthe.link/rola-instagram",
  spotify: "https://tapthe.link/rola-spotify",
  tiktok: "https://tapthe.link/rola-tiktok",
  web: "https://rolamusic.app",
} as const;

export type Platforms = keyof typeof links;
