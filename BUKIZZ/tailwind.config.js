/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        headline: ['headline', 'sans-serif'],
        subtext: ['subtext', 'sans-serif']
      }
    },
  },
  plugins: [],
}