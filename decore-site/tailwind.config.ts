import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#1E3A8A', dark: '#1E40AF', light: '#3B82F6' },
        secondary: { DEFAULT: '#DC2626', dark: '#B91C1C', light: '#EF4444' },
        accent: { DEFAULT: '#FBBF24', dark: '#F59E0B', light: '#FCD34D' },
      },
    },
  },
  plugins: [],
};
export default config;
