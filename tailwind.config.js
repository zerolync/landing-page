/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        'primary-light': '#e5e5e5',
        dark: '#121212',
        'dark-light': '#1E1E1E',
      },
    },
  },
  plugins: [],
};