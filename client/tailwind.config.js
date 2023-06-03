/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['SoDoSans', 'sans-serif'],
      },
      backgroundColor: {
        'main-color': 'rgb(212, 233, 226)',
        'light-green': '#d4e9e2',
        'secondary-green': '#d4e9e2'
      },
      colors: {
        'green-color': '#00754A',
      }
    },
  },
  plugins: [],
}

