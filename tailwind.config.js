const appStyles = require('./tria.config');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable dark mode based on the 'class' attribute
  theme: {
    extend: {
      translate:{
        "1": "25px",
        "2": "50px",
        "3": "75px",
        "4": "100px",
        "5": "125px"
      },
      fontFamily: {
        'default': [appStyles.fontFamily, 'sans'],
      },
      backgroundColor: {
        'custom-blue': '#547FEF',
        'nftfooterbggradient': appStyles.colors.nftFooterGradient,
        'nftfooterbggradientdark': appStyles.colors.nftFooterGradientDark,
      },
      borderColor: {
        'blue': '#9F8BFF',
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'lato': ['Lato'],
        'garamond': ['Garamond']
      },
      colors: {
        ...appStyles.colors,
        'received-warning': "#34C759",
        'default-light': "#808080",
        'red-warning': "#F55C5C",
        'sent-warning': "#FF3B30",
      },
      flex: {
        '01': '1 0 0',
      },
    },
  },
  plugins: [
    // require('tailwind-scrollbar'),
  ],
}