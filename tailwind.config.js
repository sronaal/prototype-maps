/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./**/*.{js,jsx,ts,tsx}" // Agrega esta línea para capturar todos los archivos
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}