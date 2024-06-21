/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightCyan: 'hsl(193, 38%, 86%)',
        neonGreen: 'hsl(150, 100%, 66%)',
        grayishBlue: 'hsl(217, 19%, 38%)',
        darkGrayishBlue: 'hsl(217, 19%, 24%)',
        darkBlue: 'hsl(218, 23%, 16%)',

      }, 

      boxShadow: {
        neonGreen: '0 0 15px rgba(57, 255, 20, 0.5)',
      }
    },
  },
  variants: {
    extend: {
      boxShadow: ['active'], // Enable box shadow on active state
    }
  },
  plugins: [],
}