import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D4B01C",
        secondary: "#1B1B1B",
        "form-light": "#969696",
        "text-dark": "#262626",
        "text-light": "#6D6D6D",
        light1: "#6D6D6D",
        dark: "#363636",
        normal: "#393939",
        bg: "#FFFBED",
      },
    },
  },
  plugins: [],
} satisfies Config;
