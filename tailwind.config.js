/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '_45': '-45deg',
      },
      colors: {
        'salmon': '#E7C192',
        'transparent': 'rgb(0,0,0,0)',
        'half-transparent': 'rgb(0,0,0,0.8)'
      },
      transitionProperty: {
        'width': 'width'
      }
    },
  },
  plugins: [],
}