/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ff3333',
        'secondry': '#cc3333',
        'bgbg': '#050505',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
