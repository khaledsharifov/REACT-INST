/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    screens: {
      "2xl":  "1535px" ,

      ml: "1250px",

      ls: "1000px" ,

      lg: "850px",

      md: "700px" ,

      lm: "500px",

      ms: "400px",

      sm: "340px" ,
    },
    extend: {},
  },
  plugins: [],
};
