/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/App.jsx",
    "./src/main.jsx",
    "./src/index.css",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#6a8764',
        'custom-gray': '#f1f4f0',
      },
    },
  },
  plugins: [],
}
