/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        background: "#FEFEFE",
        primary: "#FFF8E9",
        secondary: "#FFDA86",
        text: "#131D4E",
        accent: "#E01828",
      },
    },
  },
  plugins: [],
};
