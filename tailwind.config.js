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
        "primary": "#051F40",
        "primary-dark":"#101324",
        "grey": {
          "500": "#F6F6F6",
          "10": "#ffffff" 
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