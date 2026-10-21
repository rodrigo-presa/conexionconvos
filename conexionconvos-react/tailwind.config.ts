import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Bodoni Moda", "Georgia", "serif"],
        sans: ["Jost", "sans-serif"],
      },
      colors: {
        accent: "#B84028",
        dark: "#1a1a1a",
        "muted-fg": "#888888",
        border: "#e8e6e1",
      },
      letterSpacing: {
        "editorial": "2.4px",
        "label": "2.2px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
