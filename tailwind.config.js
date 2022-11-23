/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1F1F22",
        primaryDark: "#28282C",
        primaryLight: "#3D3D41",
        gray: "#B9B9BA",
        lightGray: "#F5F5F5",
        sapphire: "#2EC4BC",
        sapphireDeep: "#2EC4BC",
        lightWhite: "#e2e8f0",
        orange: "#ef4a23",
        darkBlack: "#333",
        textDark: "#2A2F2F",
        bgShop: "#f2f4f8",
        btnBlue: "#3749bb",
        textBlue: "#3749bb",
        textGray: "#666",
        footBg: "#081621",
      },
      fontFamily: {
        fira: ["Fira Sans Condensed", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        varelo: ["Varela Round", "sans-serif"],
        plus: ["M PLUS Rounded 1c", "sans-serif"],
        quick: ["Quicksand", "sans-serif"],
      },
      gridTemplateColumns: {
        16: "324px auto",
      },
      borderWidth: {
        1: "1px",
        2: "2px",
        3: "3px",
      },
    },
  },

  plugins: [require("tailwind-scrollbar-hide")],
};
