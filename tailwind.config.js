/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui"),
],
  daisyui: {
    themes: ["dark"], // atau ["dark"] atau tema custom lain ["mytheme"]
  },
};
