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
        blue: 'var(--color-blue)',
        'blue-dark': 'var(--color-blue-dark)',
        gray: 'var(--color-gray)',
        lightgray: 'var(--color-lightgray)',
        white: 'var(--color-white)',
        border: 'var(--color-border)',
        'border-solid': 'var(--color-border-solid)',
        'border-light': 'var(--color-border-light)',
        'border-solid-light': 'var(--color-border-solid-light)',
        text: 'var(--color-text)',
        'text-light': 'var(--color-text-light)',
        'alert-error': 'var(--alert-error)',
        'alert-success': 'var(--alert-success)',
      },

      // samir fonts 
      fontFamily: {
        samirFont: ['var(--font-exo2)'],
      },
    },
  },
  plugins: [],
}
