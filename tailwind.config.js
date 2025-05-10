/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'green-1': '#dc3c24',
          'green-2': '#dc5c44',
          'lightGreen-1': '#fbf1e1',
          'lightGreen-2': '#ec947c',
          'black-1': '#3b413a',
          'black-2': '#3f3c3c',
          'black-3': '#5b6359',
          'white-1': '#fbf1e1',
        },
        fontFamily: {
          'poppins': ['Poppins', 'sans-serif'],
          'raleway': ['Raleway', 'sans-serif'],
        }
      },
    },
    plugins: [],
  }