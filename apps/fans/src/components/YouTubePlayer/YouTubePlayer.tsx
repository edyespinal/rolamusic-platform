function YouTubePlayer({ url, title }: { url: string; title: string }) {
  let src = "";

  switch (true) {
    case url.includes("youtu.be"): {
      src = `https://www.youtube.com/embed/${url.split("youtu.be/")[1]?.split("?")[0]}`;

      break;
    }

    case url.includes("youtube.com"): {
      src = `https://www.youtube.com/embed/${url.split("v=")[1]?.split("&")[0]}`;

      break;
    }
  }

  return (
    <iframe
      width="100%"
      height="100%"
      className="size-full"
      src={src}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}

export { YouTubePlayer };
