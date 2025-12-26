/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Crimson Text"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 150s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.3%)' },
        }
      }
    },
  },
  plugins: [],
}