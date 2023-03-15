/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        "blue-bg": "#010E4C",
        "blue-text": "#3EBFF8",
        "blue-clair": "#67CCFA",
        "who-bg": "#051562",
        "block-bg": "#3552CF"
      },
      fontFamily: {
        poppins: ["poppins"],
      },
      width: {
        '40': '30%'
      }
    }
  },
  plugins: [],
}
