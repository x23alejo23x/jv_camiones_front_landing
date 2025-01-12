/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Asegúrate de que tus archivos JS/TS estén incluidos
  theme: {
    extend: {
      colors: {
        customBlue: '#15273B', // Color personalizado que ya tienes
      },
     
    },
  },
  plugins: [],
}
