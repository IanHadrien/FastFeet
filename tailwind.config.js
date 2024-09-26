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
            white2: '#FFF1D6',
            yellow: '#FFC042',
            gray: '#BEBCCC',
            gray2: '#4C4766',
            gray3: '#6F6C80',
            green: '#00D26A',
          }
      },
    },
  },
  plugins: [],
}

