// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Montserrat': ['Montserrat', 'Arial', 'Helvetica', 'sans-serif'],
      },
      boxShadow: {
        card: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      },
      colors: {
        primary: "#ee1d25",
        secondary: "#ffd400"

      },
    },

  },
  plugins: [],
}