function AudioPlayer({ songId }: { songId: string }) {
  return (
    <iframe
      src={`https://open.spotify.com/embed/track/${songId}?utm_source=generator&theme=0`}
      width="100%"
      height="152"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}

export { AudioPlayer };
