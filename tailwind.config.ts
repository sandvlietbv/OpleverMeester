import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0b1d33",
          light: "#14304f",
          soft: "#1c3b5e",
        },
        orange: {
          DEFAULT: "#e76f2c",
          light: "#f2905a",
        },
        surface: {
          light: "#f4f5f7",
          mid: "#e4e7eb",
        },
        muted: "#5b6472",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-geist-sans)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        om: "14px",
      },
      maxWidth: {
        om: "1240px",
      },
    },
  },
  plugins: [],
};

export default config;
