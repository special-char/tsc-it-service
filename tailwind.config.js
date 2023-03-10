/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      black: "#000",
      white: "#ffffff",
      gray100: "#f1f1f1",
      gainsboro: "#e2e2e2",
      lightGray: "#d3d3d3",
      dimGray: "#747474",
      gray: "#8f8f8f",
    },
    fontSize: {
      xs: ["0.75em", "1.125em"],
      sm: ["0.875em", "1.25em"],
      base: ["16px", "1.44em"],
      lg: ["18px", "1.667em"],
      xl: ["20px", "1.5em"],
      xxl: ["22px", "1.5em"],
      "2xl": ["24px", "1.583em"],
      "3xl": ["26px", "1.289em"],
      "4xl": ["32px", "1.289em"],
      "5xl": ["36px", "1.3em"],
      "6xl": ["38px", "1.289em"],
      "7xl": ["42px", "1.3em"],
      "8xl": ["52px", "1.3em"],
      "9xl": ["60px", "1.3em"],
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-satoshi)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
