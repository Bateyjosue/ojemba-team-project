/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        montBold: "montserratBold",
        montMedium: "montserratMedium",
        montRegular: "montserratRegular"
      }
    },
  },
  plugins: [],
}

