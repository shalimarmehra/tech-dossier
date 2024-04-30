const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    fontFamily: {
      custom1: ["Custom-1"],
      custom2: ["Custom-2"],
      custom3: ["Custom-3"],
      custom4: ["Custom-4"],
      custom5: ["Custom-5"]
    },

    extend: {},
  },
  plugins: [
    flowbite.plugin(),
    require('tailwind-scrollbar'),
  ],
}