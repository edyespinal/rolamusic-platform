import { cn } from "@rola/tailwind-config/utils";

function YouTubePlayer({
  url,
  title,
  className,
}: {
  url: string;
  title: string;
  className?: string;
}) {
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
      className={cn("size-full", className)}
      src={src}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}

export { YouTubePlayer };
