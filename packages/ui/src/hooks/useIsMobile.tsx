import { useMediaQuery } from "./useMediaQuery";

const useIsMobile = (width: number) => {
  return useMediaQuery(width);
};

export { useIsMobile };
