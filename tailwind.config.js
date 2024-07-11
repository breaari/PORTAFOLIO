/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        blink: 'blink 1s step-end infinite',
        enterLeft: 'enterLeft 1.5s ease-out',
        enterRight: 'enterRight 1.5s ease-out',
        enterTop: 'enterTop 1.5s ease-out',
        leaveLeft: 'leaveLeft 1.5s ease-out',
        leaveRight: 'leaveRight 1.5s ease-out',
        leaveTop: 'leaveTop 1.5s ease-out',
        enterBottom: 'leaveTop 1.5s ease-out',
        enterIn: 'enterIn 1.5s ease-out forwards',
        leaveOut: 'leaveOut 1.5s ease-in forwards',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        enterLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        enterRight: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        enterTop: { 
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        leaveLeft: {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(-100%)', opacity: 0 },
        },
        leaveRight: {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(100%)', opacity: 0 },
        },
        leaveTop: {
          '0%': { transform: 'translateY(0)', opacity: 1 },
          '100%': { transform: 'translateY(-100%)', opacity: 0 },
        },
        enterBottom: { 
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        enterIn: {
          '0%': { transform: 'scale(0)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        leaveOut: {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '100%': { transform: 'scale(0)', opacity: 0 },
        },
      },
      fontFamily: {
        'squada': ['"Squada One"', 'cursive'],
      },
      colors: {
        blanco: "#FFFFFF",
        azuloscuro: "#000B21",
        celeste: "#506DAD",
        celesteclaro: "#A4B9E4",
        dark: {
          azuloscuro:"#000B21",
          celesteclaro: "#A4B9E4",
          blanco: "#FFFFFF",
          celeste: "#506DAD",
        },
      },
      screens: {
        mq1220: {
          raw: "screen and (max-width: 1220px)",
        },
        mq980: {
            raw: "screen and (max-width: 980px)",
          },
        mq780: {
          raw: "screen and (max-width: 780px)",
        }
    }
  }
  },
  plugins: [],
}

