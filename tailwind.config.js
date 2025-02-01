/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: '#15273B',
      },
      animation: {
        jump: 'jump 1s ease-in-out infinite', 
      },
      keyframes: {
        jump: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)', 
          },
        },
      },
    },
  },
  plugins: [],
}
