export const links = {
  youtube: "https://urlgeni.us/youtube/channel/rola-youtube",
  rolaTalks: "https://urlgeni.us/youtube/playlist/rola-talks",
  rolaSessions:
    "https://youtube.com/playlist?list=PLCyrtUMjK4nGkSo5hZF0dFozCCZaEubUu&si=bjHdiZDacEa0p_cr",
  instagram: "https://urlgeni.us/instagram/rola-instagram",
  spotify: "https://urlgeni.us/spotify/rola-spotify",
  tiktok: "https://urlgeni.us/tiktok/rola-tiktok",
  web: "https://rolamusic.app",
} as const;

export type Platforms = keyof typeof links;
