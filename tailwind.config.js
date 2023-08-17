/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js, html}"
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
        darkergray: "#7F7F7F"
      }
    },
  },
  plugins: [],
}

