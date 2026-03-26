/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ai-red': '#E31837', // Air India Brand Red
        'ai-gold': '#B78727', // Air India Accent Gold
      }
    },
  },
  plugins: [],
}