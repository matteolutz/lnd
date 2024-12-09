import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Kollektif"', "sans-serif"],
        highrise: ['"Highrise"', "sans-serif"],
      },
      colors: {
        primary: "#008080",
        secondary: "#ff5900",
        tertiary: "#dddddd",
      },
    },
  },
  plugins: [],
} satisfies Config;
