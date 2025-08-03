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
        'border-light': 'rgba(255, 255, 255, 0.2)',
        'border-solidLight': '#545557',
        text: '#1C1D20',
        textLight: '#FFFFFF',
        'alert-error': '#ff4444',
        'alert-success': '#24C958',
      },
      fontFamily: {
        samirFont: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
