/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

darkMode:'class',


  theme: {
    extend: {
      boxShadow: {
        customShadow: '0px 8px 20px -7px #073268;', // Example custom shadow
      },
      colors: {
        "mainBG" : "#F4F68A",
        "secondaryBG": "#FFFFFF",
        "sectionDark": "#0F0F10",
        "primary": "#051F40",
        "primary-dark":"#101324",
        "grey": {
          "100": "#0F0F10",
          "80": "#333333",
          "50": "#707079",
          "30": "#CFDAE5",
          "0": "#ffffff" 
        }
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'caslon': ['"Adobe Caslon Pro"', 'serif'],
      },  
      
    },
  },
  plugins: [],
  
}