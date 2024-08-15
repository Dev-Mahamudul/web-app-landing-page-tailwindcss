/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'primary': '#ee0181',
        'second': '#01ee91'
      },
      fontFamily: {
        'primary-font': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

