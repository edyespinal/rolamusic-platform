export const links = {
  youtube: "https://urlgeni.us/youtube/channel/rola-youtube",
  instagram: "https://urlgeni.us/instagram/rola-instagram",
  spotify: "https://urlgeni.us/spotify/rola-spotify",
  tiktok: "https://urlgeni.us/tiktok/rola-tiktok",
  web: "https://rolamusic.app",
} as const;

export type Platforms = keyof typeof links;
