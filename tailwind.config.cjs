/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["InterVariable", "sans-serif"],
      mono: [`"MD IO 0.5"`, "md-io-fallback", "monospace"],
      obviously: ["Obviously", "obviously-regular-fallback", "sans-serif"],
      "obviously-wide": [
        `"Obviously Wide", "obviously-wide-fallback", "sans-serif"`,
      ],
    },
    colors: {
      black: "#17191E",
      white: "#ffffff",
      "astro-gray": {
        100: "#F2F6FA",
        200: "#BFC1C9",
        300: "#858B98",
        400: "#545864",
        500: "#343841",
        600: "#23262D",
        700: "#17191E",
      },
      "astro-blue": "#3245FF",
      "astro-purple": "#BC52EE",
      "astro-red": "#D83333",
      "astro-pink": {
        light: "#E8C4F9",
        DEFAULT: "#F041FF",
      },
      "astro-orange": "#F8E42E",
      "astro-yellow": "#FF7D54",
      "astro-hover": "#E8C4F9",
    },
    backgroundImage: {
      "blue-purple-gradient":
        "linear-gradient(83.21deg, #3245FF 0%, #B845ED 100%)",
      "blue-green-gradient":
        "linear-gradient(247.23deg, #4AF2C8 0%, #2F4CB3 100%)",
      "red-pink-gradient":
        "linear-gradient(66.77deg, #D83333 0%, #F041FF 100%)",
      "orange-yellow-gradient":
        "linear-gradient(266.93deg, #F8E42E 0%, #FF7D54 100%)",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
