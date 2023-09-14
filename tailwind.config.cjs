/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["WorkSans", "sans-serif"],
      },
      colors: {
        primary: "#FFD60A",
        secondary: "#058C42",
        bgDark: "#020202",
        bgDarkSeconday: "#0D2818",
      },
    },
  },
  plugins: [],
};
