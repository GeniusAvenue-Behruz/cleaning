/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'grand': ['Grandstander', 'sans-serif'], // Ensure fallback fonts are included
        'inter': ['Inter', 'sans-serif'],        // Ensure fallback fonts are included
      },
    },
  },
  plugins: [],
}
