/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': 'rgb(181, 181, 181)',
      },
      borderRadius: {
        'custom': '6px',
      },
    },
  },
  plugins: [],
}