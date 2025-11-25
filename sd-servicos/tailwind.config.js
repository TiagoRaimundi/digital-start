/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sd-orange': '#FF6B1A',
        'sd-dark': '#1a1a1a',
      },
    },
  },
  plugins: [],
}
