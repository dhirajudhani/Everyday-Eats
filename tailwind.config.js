/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        shimmer: 'shimmer 3s linear infinite',
      },
      backgroundImage: {
        'shimmer': 'linear-gradient(to right, #fff, #e1e1e1, #fff, #dfdfdf, #fff)',
      },
      colors: {
        'custom-gray': 'rgb(181, 181, 181)',
      },
      borderRadius: {
        'custom': '6px',
      },
      colors: {
        customGreen: 'rgb(36, 150, 63)',
      },
    },
  },
  plugins: [],
}