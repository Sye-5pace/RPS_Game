/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      barlow:[ 'Barlow Semi Condensed', 'sans-serif']
    },
    extend: {
      textShadow: {
        'md': '0px 3px 3px rgba(0, 0, 0, 0.20)',
      },
    },
  },
  plugins: [
    plugin(function({addVariant}){
      addVariant('children','&>*')
    })
  ],
}

