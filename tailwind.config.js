/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3E160C",
        secondary: "#785d32",
      },
      fontFamily: {
        bungee: ["Bungee", "cursive"],
        chewy: ["Chewy", "cursive"],
        spartan: ["League Spartan", "sans-serif"],
        monoton: ["Monoton", "cursive"],
        sharetech: ["Share Tech", "sans-serif"],
      },
    },
  },
  plugins: [],
};