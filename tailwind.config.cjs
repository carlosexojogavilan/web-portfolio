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
        secondary: "#FFC300",
        bgDark: "#00172F",
        bgDarkSecondary: "#00264B",
        bgLight: "#DCEAFF",
      },
      keyframes: {
        menuSlideIn: {
          "0%": { transform: "translateX(200%)" },
          "100%": { transform: "translateX(0)" },
        },
        menuSlideOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(200%)" },
        },
      },
      animation: {
        menuSlideIn: "menuSlideIn 0.5s ease-out",
        menuSlideOut: "menuSlideOut 0.5s ease-in",
      },
    },
  },
  darkMode: "class",
  plugins: [require("tailwindcss-animated")],
};
