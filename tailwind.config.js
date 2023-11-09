/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,html}"
  ],
  theme: {
    extend: {
      fontFamily: {
        montBold: "montserratBold",
        montMedium: "montserratMedium",
        montRegular: "montserratRegular",
        robotoBlack: "robotoBlack",
        robotoBold: "robotoBold",
        ralewayBold: "ralewayBold",
        ralewayRegular: "ralewayRegular",
        relewaySemiBold: "relewaySemiBold"
      },
      colors: {
        primary: "#8ACC50",
        secondary: "#001342",
        primarydarker: "#116355",
        darkest:'#3f6747',
        darkergray: "#7F7F7F",
        primaryLinear: "#8ACC50",
        darkest:'#3f6747',
        yellowlighter: '#F4BA00'
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

