/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
          primary: {
            purple: '#4C33CC',
            purple2: '#D4CCFF',
            white: '#F7F5FA',
            yellow: '#FFC042',
            gray: '#BEBCCC',
            gray2: '#4C4766',
          }
      },
    },
  },
  plugins: [],
}

