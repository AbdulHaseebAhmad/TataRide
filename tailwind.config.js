/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "primary":"#DC4128",
        "lightgrey":"#C4C4C4",
        "lightblack":"#373737",
        "darkblack":"#000000",
        "bgwhite":"#FFFFFF",
        "gray":"#757575"

      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],  
      },
    },
  },
  plugins: [
  ],
}

