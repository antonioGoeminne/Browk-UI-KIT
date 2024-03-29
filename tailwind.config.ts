import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6E41E2",
          ["darker-100"]: "#5835B0",
          ["darker-200"]: "#472C8A",
          disabled: "#E3DAF9",
        },
        gray: {
          DEFAULT: "#111111",
          100: "#D4D4D4",
          200: "#F1F1F1",
          300: "#FAFAFA",
        },
        red: {
          DEFAULT: "#DB524E",
          100: "#F9E3E3",
          200: "#C7302B",
        },
        green: {
          DEFAULT: "#27AE60",
          100: "#CBECD9",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
