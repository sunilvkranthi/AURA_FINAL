import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0e0c0a",       // warm black
        cream: "#f4efe6",
        champagne: "#e8d9bd",
        gold: "#c9a66b",
        clay: "#8a6a52",
        ember: "#3a2f28",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
    },
  },
  plugins: [],
};
export default config;
