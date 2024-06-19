import type { Config } from "tailwindcss";

const config: Omit<Config, "content" | "mode"> = {
  mode: "jit",
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "hsl(var(--brand))",
          light: "hsl(var(--brand-light))",
          dark: "hsl(var(--brand-dark))",
        },
        black: "hsl(var(--black))",
        white: "hsl(var(--white))",
        gray: {
          DEFAULT: "hsl(var(--gray))",
          light: "hsl(var(--gray-light))",
          dark: "hsl(var(--gray-dark))",
        },
      },
    },
  },
  plugins: [],
};

export default config;
