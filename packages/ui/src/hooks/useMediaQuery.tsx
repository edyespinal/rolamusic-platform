import React, { useCallback } from "react";

const useMediaQuery = (query: number) => {
  const [targetReached, setTargetReached] = React.useState(false);
  const updateTarget = useCallback((e: MediaQueryListEvent) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  React.useEffect(() => {
    const media = window.matchMedia(`max-width: ${query}px`);

    media.addEventListener("change", updateTarget);

    if (media.matches) {
      setTargetReached(true);
    }

    return () => {
      media.removeEventListener("change", updateTarget);
    };
  }, []);

  return targetReached;
};

export { useMediaQuery };
