/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "safari-slate": "#546A7B",
        "safari-dark": "#191A23",
        "safari-light": "#F3F3F3",
        "safari-gold": "#D4AF37",
        customGrey: "rgb(97, 120, 145)",
        customBlue: "#25344F",
      },
      fontFamily: {
        sans: ['"Space Grotesk"', "sans-serif"],
        serif: ['"Playfair Display"', "serif"],
  },
    },
  },
  plugins: [],
}


