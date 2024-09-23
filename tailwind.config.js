/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        'neutralSilver': '#F5F7FA',
        'neutralDgrey': '#4D4F4F',
        'brandPrimary': '#4CAF4F',
        'neutralGrey' : '#717171',
    },
 
  }
 
},

  plugins: [],
}