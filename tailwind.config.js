/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1C1D20',
        'dark-dark': '#141517',
        light: '#FFFFFF',
        deepb: '#334BD3',
        blue: '#455CE9',
        gray: '#999D9E',
        lightGray: '#E9EAEB',
        white: '#FFFFFF',
        border: 'rgba(28, 29, 32, 0.175)',
        borderSolid: '#D2D2D2',
        borderLight: 'rgba(255, 255, 255, 0.2)',
        borderSolidLight: '#545557',

      },
      fontFamily: {
        // This creates the 'font-samirFont' utility class
        samirFont:  ['Inter', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],

      },
    },
  },
  plugins: [],
}
