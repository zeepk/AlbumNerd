/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        dark: ["0px 5px 10px rgba(0,0,0,0.5)"],
      },
    },
  },
  plugins: [],
};

module.exports = config;
