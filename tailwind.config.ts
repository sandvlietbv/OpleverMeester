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
          DEFAULT: "#1a1a1a",
          light: "#3f3d3a",
          soft: "#66615b",
        },
        orange: {
          DEFAULT: "#a96800",
          light: "#e0a11a",
        },
        surface: {
          light: "#faf7f1",
          mid: "#e7dfd2",
        },
        muted: "#69625b",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["Georgia", "Times New Roman", "serif"],
        brand: ["Georgia", "Times New Roman", "serif"],
      },
      borderRadius: {
        om: "16px",
      },
      maxWidth: {
        om: "1240px",
      },
    },
  },
  plugins: [],
};

export default config;
