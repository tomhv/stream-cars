/** @type {import('tailwindcss').Config} */
// https://www.color-hex.com/color-palette/28392
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
        'light-purple': '#babeee',
        'purple': '#7573b6',
        'aqua': '#70acb4',
        'light-aqua': '#90d2c3',
        'yellow': '#ecf4be',
    },
    extend: {},
  },
  plugins: [],
}

