/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: 'var(--color-dark)',
        'dark-dark': 'var(--color-dark-dark)',
        light: 'var(--color-light)',
        samir: 'var(--color-samir)',
        blue: 'var(--color-blue)',
        gray: 'var(--color-gray)',
        lightGray: 'var(--color-lightgray)',
        white: 'var(--color-white)',
        border: 'var(--color-border)',
        borderSolid: 'var(--color-border-solid)',
        'border-light': 'var(--color-border-light)',
        'border-solidLight': 'var(--color-border-solid-light)',
        text: 'var(--color-text)',
        textLight: 'var(--color-text-light)',
        'alert-error': 'var(--alert-error)',
        'alert-success': 'var(--alert-success)',
      },

      // samir fonts 
      fontFamily: {
        samirFont: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
