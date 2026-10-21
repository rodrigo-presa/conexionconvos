import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", sm: "2rem", lg: "3rem", xl: "4rem" },
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        ink: "#15141A",
        ink2: "#23222B",
        cream: "#F4EEE4",
        cream2: "#EAE1D2",
        red: { DEFAULT: "#E24D57", dark: "#C93B45" },
        gold: "#C7A56A",
        muted2: "#6E6A73",
        border: "rgba(21,20,26,0.1)",
        background: "#F4EEE4",
        foreground: "#15141A",
        card: { DEFAULT: "#FFFFFF", foreground: "#15141A" },
        primary: { DEFAULT: "#E24D57", foreground: "#FFFFFF" },
        secondary: { DEFAULT: "#EAE1D2", foreground: "#15141A" },
        muted: { DEFAULT: "#EAE1D2", foreground: "#6E6A73" },
        accent: { DEFAULT: "#C7A56A", foreground: "#15141A" },
      },
      fontFamily: {
        sans: ["Montserrat", "system-ui", "sans-serif"],
        serif: ["Fraunces", "Georgia", "serif"],
        display: ["Bodoni Moda", "Georgia", "serif"],
      },
      fontSize: {
        "10xl": ["9rem", { lineHeight: "1" }],
      },
      keyframes: {
        "fade-in": { "0%": { opacity: "0", transform: "translateY(10px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        marquee: { "0%": { transform: "translateX(0%)" }, "100%": { transform: "translateX(-50%)" } },
      },
      animation: {
        "fade-in": "fade-in 0.4s ease-out forwards",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
