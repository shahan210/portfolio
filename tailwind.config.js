/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customColor3: "#16325B",
        customColor2: "#1A1A1D",
        customColor1: "#3B1C32",
      },
    },
  },
  plugins: [],
};
