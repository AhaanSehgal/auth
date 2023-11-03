/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-blue': '#547FEF',
      },
      borderColor:{
        'blue':'#9F8BFF',
      },
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

