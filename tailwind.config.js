/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff', // white
        'primary-light': '#f3f4f6', // gray-100
        dark: '#111111',
        'dark-light': '#1A1A1A',
      },
      animation: {
        'border-pulse': 'border-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'border-pulse': {
          '0%, 100%': { borderColor: '#ffffff' },
          '50%': { borderColor: '#f3f4f6' },
        },
      },
    },
  },
  plugins: [],
};