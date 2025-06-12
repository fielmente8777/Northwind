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
        primary: "#C72C27",
        secondary: "#2A2A2A",
        tertiary: "#FF5500",
        light: "#7C7C7C",
        dark: "#4D4D4D",
        extra: "#FFFEED",
      },
      fontFamily: {
        gothamBookItalic: ['GothamBookItalic', 'sans-serif'],
        gothamMedium: ['GothamMedium', 'sans-serif'],
        gothamBold: ['GothamBold', 'sans-serif'],
        gothamBlack: ['GothamBlack', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
