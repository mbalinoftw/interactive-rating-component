/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        light_grey: "hsl(217, 12%, 63%)",
        medium_grey: "hsl(216, 12%, 54%)",
        dark_blue: "hsl(213, 19%, 18%)",
        very_dark_blue: "hsl(216, 12%, 8%)",
        orange: "hsl(25, 97%, 53%)",
      },
    },
  },
  plugins: [],
};
