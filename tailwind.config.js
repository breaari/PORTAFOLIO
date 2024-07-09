/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      fontFamily: {
        'squada': ['"Squada One"', 'cursive'],
      },
      colors: {
        blanco: "#FFFFFF",
        grisoscuro: "#666666",
        grisclaro: "#F5F5F5",
        azuloscuro: "#000B21",
        celeste: "#506DAD",
        celesteclaro: "#A4B9E4"
      },
    },
  },
  plugins: [],
}

