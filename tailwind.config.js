/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html","./src/**/*.{html,js}", "./contact.html"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        'color-red': '#ff5e5e',
      },
    },
  },
  plugins: [],
}