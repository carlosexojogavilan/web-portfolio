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
        bgDark: "#00172F",
        bgDarkSeconday: "#00264B",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
